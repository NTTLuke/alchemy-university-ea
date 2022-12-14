const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
   
    let colorFound;

    COLORS.forEach(color => {
        let colorHash = sha256(utf8ToBytes(color));  
        if(toHex(colorHash) === toHex(hash))
            colorFound = color;
    });

    return colorFound;
    
}
module.exports = findColor;