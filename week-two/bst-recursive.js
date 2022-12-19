class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node){

        if(this.root == null)
        {
          this.root = node;      
          return;   
        } 
        this.internalAddNode(this.root, node);    
    }

    internalAddNode(pNode, cNode){

        if(cNode.data < pNode.data ){
             if(pNode.left == null){
                pNode.left = cNode;
             }
             else
                this.internalAddNode(pNode.left, cNode);
        }

        if(cNode.data > pNode.data ){
             if(pNode.right == null){
                pNode.right = cNode;
             }
             else
                this.internalAddNode(pNode.right, cNode);
        }
    }
    
    hasNode(number){

        return this.internalHasNode(this.root, number);
    }

    internalHasNode(node, number){

        if(node == null)
            return false;

        if(node.data == number)
            return true;
        
        if(number > node.data){
            return this.internalHasNode(node.right, number);
        }
        else{
            return this.internalHasNode(node.left, number);
        }
    }

}

module.exports = Tree;


class Node {
    constructor(data) {
        this.data = data;
        this.left = null,
        this.right = null;
    }
}

module.exports = Node;