const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
    
    //hash message
    let hashMsg = hashMessage(message);

    //recover public key 
    //see https://github.com/paulmillr/noble-secp256k1#signmsghash-privatekey
    let publicKey = secp.recoverPublicKey(hashMsg, signature, recoveryBit)

    return publicKey
    
}

module.exports = recoverKey;