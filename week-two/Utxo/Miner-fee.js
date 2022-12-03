class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs
        this.outputUTXOs = outputUTXOs
    }
    execute() {
        for (let i=0; i < this.inputUTXOs.length;i++){
            if (this.inputUTXOs[i].spent){
                throw "TXO is already spent."
            }
        }

        let totalInputUtxo=0
        let totalOutputUtxo=0;
        for (let i=0; i < this.inputUTXOs.length;i++){
            totalInputUtxo += this.inputUTXOs[i].amount
        }
         for (let i=0; i < this.outputUTXOs.length;i++){
            totalOutputUtxo += this.outputUTXOs[i].amount
        }
        if(totalInputUtxo<totalOutputUtxo) throw "Unsufficeint Amount"
        for (let i=0; i < this.inputUTXOs.length;i++){
           this.inputUTXOs[i].spent = true
        }
        let minerFee = totalInputUtxo - totalOutputUtxo
        if(minerFee < 0 ) throw "Unsufficeint Amount"
        this.fee = minerFee
    }
}

module.exports = Transaction;