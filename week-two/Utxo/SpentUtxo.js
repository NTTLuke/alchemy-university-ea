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
    }
}

module.exports = Transaction;