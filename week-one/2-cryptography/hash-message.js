const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
    
    // turn this into an array of bytes, the expected format for the hash algorithm
    const bytes = utf8ToBytes(message);
    
    // hash the message using keccak256
    return keccak256(bytes);
    
}

module.exports = hashMessage;