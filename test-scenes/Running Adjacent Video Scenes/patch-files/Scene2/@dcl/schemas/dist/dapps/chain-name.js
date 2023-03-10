"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChainId = exports.ChainName = void 0;
const validation_1 = require("../validation");
const chain_id_1 = require("./chain-id");
/**
 * Different supported chain names
 * @alpha
 */
var ChainName;
(function (ChainName) {
    ChainName["ETHEREUM_MAINNET"] = "Ethereum Mainnet";
    ChainName["ETHEREUM_ROPSTEN"] = "Ropsten";
    ChainName["ETHEREUM_RINKEBY"] = "Rinkeby";
    ChainName["ETHEREUM_GOERLI"] = "Goerli";
    ChainName["ETHEREUM_KOVAN"] = "Kovan";
    ChainName["MATIC_MAINNET"] = "Polygon";
    ChainName["MATIC_MUMBAI"] = "Mumbai";
})(ChainName = exports.ChainName || (exports.ChainName = {}));
/**
 * Get chain id by chain name
 * @alpha
 */
function getChainId(chainName) {
    switch (chainName) {
        case ChainName.ETHEREUM_MAINNET:
            return chain_id_1.ChainId.ETHEREUM_MAINNET;
        case ChainName.ETHEREUM_ROPSTEN:
            return chain_id_1.ChainId.ETHEREUM_ROPSTEN;
        case ChainName.ETHEREUM_RINKEBY:
            return chain_id_1.ChainId.ETHEREUM_RINKEBY;
        case ChainName.ETHEREUM_GOERLI:
            return chain_id_1.ChainId.ETHEREUM_GOERLI;
        case ChainName.ETHEREUM_KOVAN:
            return chain_id_1.ChainId.ETHEREUM_KOVAN;
        case ChainName.MATIC_MAINNET:
            return chain_id_1.ChainId.MATIC_MAINNET;
        case ChainName.MATIC_MUMBAI:
            return chain_id_1.ChainId.MATIC_MUMBAI;
        default:
            return null;
    }
}
exports.getChainId = getChainId;
/**
 * @alpha
 */
(function (ChainName) {
    ChainName.schema = {
        type: 'string',
        enum: Object.values(ChainName)
    };
    ChainName.validate = (0, validation_1.generateLazyValidator)(ChainName.schema);
})(ChainName = exports.ChainName || (exports.ChainName = {}));
//# sourceMappingURL=chain-name.js.map