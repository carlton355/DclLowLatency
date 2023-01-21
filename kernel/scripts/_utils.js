"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyFile = exports.ensureFileExists = void 0;
const fs = require("fs-extra");
const path = require("path");
/**
 * @returns the resolved absolute path
 */
function ensureFileExists(root, file) {
    const x = path.resolve(root, file.replace(/^\//, ''));
    if (!fs.existsSync(x)) {
        throw new Error(`${x} does not exist`);
    }
    return x;
}
exports.ensureFileExists = ensureFileExists;
function copyFile(from, to) {
    console.log(`> copying ${from} to ${to}`);
    if (!fs.existsSync(from)) {
        throw new Error(`${from} does not exist`);
    }
    // if it is not a file, remove it to avoid conflict with symbolic links
    if (fs.existsSync(to)) {
        const type = fs.lstatSync(to);
        if (!type.isFile()) {
            fs.removeSync(to);
        }
    }
    fs.copySync(from, to);
    if (!fs.existsSync(to)) {
        throw new Error(`${to} does not exist`);
    }
}
exports.copyFile = copyFile;
