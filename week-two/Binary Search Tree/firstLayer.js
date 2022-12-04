class Tree {
    constructor() {
        this.root = null
    }
    addNode(node){
        if(this.root){
            if(this.root.left){
                this.root.right =node
            }
            else{
                this.root.left = node
            }
        }
        else   this.root = node;
    }
}

module.exports = Tree;