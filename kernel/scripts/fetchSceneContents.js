"use strict";
/**
 * Usage: Specify SCENE_ID or PARCEL as evironment variables, and then run make fetchSceneContents in the kernel folder
 *
 * Example: PARCEL='0,0' make fetchSceneContents
 *
 * The scene will be downloaded from https://peer.decentraland.org. This can be overriden with the CONTENT_SERVER_URL variable
 * The scene will be downloaded in the public/downloaded-scenes folder. This can be overriden with the OUTPUT_DIR variable
 */
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
const dcl_catalyst_client_1 = require("dcl-catalyst-client");
const dcl_catalyst_commons_1 = require("dcl-catalyst-commons");
const fs = require("fs");
const sceneId = process.env.SCENE_ID;
const parcel = process.env.PARCEL;
const contentServerUrl = (_a = process.env.CONTENT_SERVER_URL) !== null && _a !== void 0 ? _a : 'https://peer.decentraland.org';
const outputRoot = (_b = process.env.OUTPUT_DIR) !== null && _b !== void 0 ? _b : 'public/downloaded-scenes';
const maxDownloads = parseInt((_c = process.env.MAX_DOWNLOADS) !== null && _c !== void 0 ? _c : '50');
const client = new dcl_catalyst_client_1.CatalystClient({ catalystUrl: contentServerUrl });
if (!sceneId && !parcel) {
    console.log('Please specify the scene id or pointer for which to download its contents using the SCENE_ID or POINTER env variables respectively');
    process.exit(1);
}
function restrictLength(pending) {
    if (pending.length > 5) {
        return `${pending.length}`;
    }
    else {
        return JSON.stringify(pending);
    }
}
async function main() {
    const sceneData = sceneId
        ? await client.fetchEntityById(dcl_catalyst_commons_1.EntityType.SCENE, sceneId)
        : (await client.fetchEntitiesByPointers(dcl_catalyst_commons_1.EntityType.SCENE, [parcel]))[0];
    const pending = {};
    const queued = [];
    const scenePath = `${outputRoot}/${sceneData.pointers[0]}-scene-${sceneData.id}`;
    await fs.promises.mkdir(scenePath, { recursive: true });
    function download(content) {
        const url = `${contentServerUrl}/content/contents/${content.hash}`;
        console.log(`Downloading ${content.file} from ${url}`);
        pending[content.file] = (0, node_fetch_1.default)(url)
            .then(async (response) => {
            if (response.ok) {
                const pathParts = content.file.split('/');
                if (pathParts.length > 0) {
                    pathParts.pop();
                    const folder = pathParts.join('/');
                    await fs.promises.mkdir(`${scenePath}/${folder}`, { recursive: true });
                }
                const fileStream = fs.createWriteStream(`${scenePath}/${content.file}`);
                await new Promise((resolve, reject) => {
                    response.body.pipe(fileStream);
                    response.body.on('error', (e) => {
                        delete pending[content.file];
                        console.log(`Error downloading file ${content.file}. Pending: ${restrictLength(Object.keys(pending))}. Queued: ${restrictLength(queued.map((it) => it.file))}`, e);
                        reject(e);
                    });
                    fileStream.on('finish', () => {
                        delete pending[content.file];
                        console.log(`Finished downloading file ${content.file}. Pending: ${restrictLength(Object.keys(pending))}  Queued: ${restrictLength(queued.map((it) => it.file))}`);
                        resolve();
                    });
                }).finally(() => {
                    if (queued.length > 0) {
                        download(queued.shift());
                    }
                });
            }
            else {
                const text = await response.text();
                console.log(`Unexpected response from server downloading file ${content.file}. Status: ${response.status}; Body: ${text}`);
            }
        })
            .catch((e) => {
            // Ignored. This is handled inside
        });
    }
    for (let content of sceneData.content) {
        if (Object.keys(pending).length < maxDownloads) {
            download(content);
        }
        else {
            queued.push(content);
        }
    }
    while (Object.values(pending).length > 0) {
        await Promise.all(Object.values(pending));
    }
}
main().then(() => console.log('Process finished successfully'), (e) => {
    console.log('Process failed', e);
    process.exit(1);
});
