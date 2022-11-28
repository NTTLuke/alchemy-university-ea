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

    //get mempool length
    let elementsNr = mempool.length;
    let solved = false;
    let nounceCounter = -1;
    let block = { id: blocks.length, transactions: transactions, nonce: nounceCounter };

    for (let i = 0; i < elementsNr; i++) {
        //load transaction and remove mempool
        transactions.push(mempool.pop());

        //add blocks only if MAX_TRANSACTIONS reached or mempool is empty
        if (transactions.length == MAX_TRANSACTIONS || transactions.length == elementsNr) {
            //solve the target difficulty of the block
            while (!solved)
            {   
                //starting with zero 
                block.nonce = nounceCounter++;
                const blockHashed = SHA256(JSON.stringify(block));
                
                //checking if difficulty has been reached
                if(BigInt(`0x${blockHashed}`) < TARGET_DIFFICULTY)
                {
                    block.hash = blockHashed;
                    solved = true;
                }            
            }

            //mine 
            blocks.push(block);

            //reset (note sure if transaction reset is the right way..thinking)
            transactions = [];
            elementsNr = mempool.length;
        }
    }

}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction,
    mine,
    blocks,
    mempool
};