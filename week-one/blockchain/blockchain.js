const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [];
    }

    addBlock(block){

        var prevBlock = this.chain[this.chain.length - 1];
        if(prevBlock != null)
        {
            block.previousHash = prevBlock.toHash();
        }

        this.chain.push(block);
        
    }

    isValid(){

        for (let i = this.chain.length - 1; i > 0; i--) {
            if(this.chain[i-1].toHash().toString() !== this.chain[i].previousHash.toString() )
            {
                console.log("FALSE");
                return false
            }        
        }

        return true;
    }
}

module.exports = Blockchain;