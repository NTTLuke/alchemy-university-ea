class Tree {
    constructor() {
        this.root = null
    }
    addNode(node){
        if(this.root){
            this.addChild(this.root,node)
        }
        else   this.root = node;
    }

    addChild(parent ,child){
        if(child.data < parent.data){
            if(parent.left==null){
                parent.left = child
            }
            else{
                this.addChild(parent.left , child)
            }
        }
        else{
            if (parent.right == null) {
                parent.right = child
            }
            else {
                this.addChild(parent.right, child)
            }    
        }
    }
}

module.exports = Tree;