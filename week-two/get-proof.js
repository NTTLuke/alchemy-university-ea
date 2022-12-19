class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves;
        this.concat = concat;
    }
    getRoot() {
        return this.internalGetRoot(this.leaves);
    }
    internalGetRoot(leaves) {

        let tempLeaf = [];

        if (leaves.length === 1)
            return leaves[0];

        for (let i = 0; i <= leaves.length - 1; i++) {
            if (i % 2 === 0) {
                if (i === leaves.length - 1)
                    tempLeaf.push(leaves[i]);
                else
                    tempLeaf.push(this.concat(leaves[i], leaves[i + 1]));

            }
        }

        return this.internalGetRoot(tempLeaf)
    }
    getProof(index){

        let proof = [];

        let copyLeave = this.leaves.map((x) => x);

        while (copyLeave.length > 1) {

            if (index % 2 == 0) {

                if (index == copyLeave.length - 1 && copyLeave.length % 2 != 0) {
                    //no action 
                } else {
                    proof.push({ data: copyLeave[index + 1], left: false });

                }

            } else {
                proof.push({ data: copyLeave[index - 1], left: true });
                index--;

            }

            index = index / 2;


            for (let i = 0; i < copyLeave.length; i++) {
                if (i + 1 < copyLeave.length) {

                    copyLeave.splice(i, 2, this.concat(copyLeave[i], copyLeave[i + 1]));
                }

            }
        }
        //console.log(proof);
        return proof;
  
    }

}

module.exports = MerkleTree;