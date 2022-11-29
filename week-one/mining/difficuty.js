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
    let transactions=[];
    while(transactions.length<MAX_TRANSACTIONS && mempool.length>0){
        transactions.push(mempool.pop());    
    }
    
    var block = {id : blocks.length, transactions : transactions, nonce:0};
    let blockHashed = SHA256(JSON.stringify(block));
    while(true)
    {
    if(BigInt(`0x${blockHashed}`)<TARGET_DIFFICULTY)
        {
         break
        }
    else
        {
        block.nonce=block.nonce+1
        blockHashed = SHA256(JSON.stringify(block));
        }
    }
    blocks.push({hash : blockHashed, transactions : transactions,nonce : block.nonce});
}


module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction,
    mine,
    blocks,
    mempool
};
