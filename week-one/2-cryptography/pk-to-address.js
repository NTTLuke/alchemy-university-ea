const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { toHex } = require("ethereum-cryptography/utils");

function getAddress(publicKey) {
    
    //format type (compressed or not) is indicated by the first byte of the pk
    var pkFormat = publicKey.slice(0,1);
    //console.log(pkFormat);

    var pk = publicKey.slice(1);
    //console.log(pk);

    var pkHashed = keccak256(pk);
    //console.log(pkHashed);

    //the address is identified by last 20 byte
    var ethAddress = pkHashed.slice(-20);
    
    //convert to string of hexadecimal characters for curiosity
    //console.log(toHex(ethAddress));

    return ethAddress;
    
}

module.exports = getAddress;