class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves;
        this.concat = concat;
    }
    getRoot() {
        return this.internalGetRoot(this.leaves);
    }
    internalGetRoot(leaves){
        
        let tempLeaf = [];
        
        if(leaves.length === 1)
            return leaves[0];
            
        for (let i = 0; i < leaves.length - 1; i++) {
            if(i % 2 === 0){
                tempLeaf.push(this.concat(leaves[i], leaves[i+1]));
                console.log(tempLeaf);
            }
        }
        
        return this.internalGetRoot(tempLeaf)
    }
}



//TEMP ONLINE 
//https://www.programiz.com/

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");

class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves;
        this.concat = concat;
    }
    
    getRoot() {
        return this.internalGetRoot(this.leaves);
    }
    
    internalGetRoot(leaves){
        
         let tempLeaf = [];
        
        if(leaves.length === 1)
            return leaves[0];
            
        for (let i = 0; i <= leaves.length - 1; i++) {
            if(i % 2 === 0){
                if(i === leaves.length - 1)
                    tempLeaf.push(leaves[i]);
                else
                    tempLeaf.push(this.concat(leaves[i], leaves[i+1]));
            
                console.log(tempLeaf);
            }
        }
        
        return this.internalGetRoot(tempLeaf)
    }
}


const concat = (a, b) => `Hash(${a} + ${b})`;
const leaves = ['A', 'B', 'C', 'D', 'E', 'F'];
const merkleTree = new MerkleTree(leaves, concat);

console.log("Result", merkleTree.getRoot());

//Hash(Hash(Hash(A + B) + Hash(C + D)) + Hash(Hash(E + F) + Hash(G + H)))
//Hash(Hash(Hash(A + B) + Hash(C + D)) + Hash(Hash(E + F) + Hash(G + H)))


