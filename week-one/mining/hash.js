const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];
let transactions = [];

function addTransaction(transaction) {
    mempool.push(transaction);
}

function mine() {

    var block = JSON.stringify({id : blocks.length});
    let blockHashed = SHA256(block);
    
    blocks.push({hash : blockHashed});

}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};
