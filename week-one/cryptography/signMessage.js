const secp = require("ethereum-cryptography/secp256k1");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");
const hashMessage = require('./hashMessage');

const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

async function signMessage(msg) {
    
    //hash the message 
    var msgHash = hashMessage(msg);

    //signature with recovered bit 
    const signature = await secp.sign(msgHash, PRIVATE_KEY, {recovered : true});

    return signature;
}

module.exports = signMessage;