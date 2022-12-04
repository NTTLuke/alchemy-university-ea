class Tree {
    constructor() {
        this.root = null
    }
    addNode(node) {
        if (this.root) {
            this.addChild(this.root, node)
        }
        else this.root = node;
    }

    addChild(parent, child) {
        if (child.data < parent.data) {
            if (parent.left == null) {
                parent.left = child
            }
            else {
                this.addChild(parent.left, child)
            }
        }
        else {
            if (parent.right == null) {
                parent.right = child
            }
            else {
                this.addChild(parent.right, child)
            }
        }
    }

    hasNode(data) {
        return this.searchNode(this.root, data)
    }
    searchNode(node, data) {
        
        if (node.data == data) {
            return true
        }
        if (data < node.data && node.left != null) {
            return this.searchNode(node.left, data)
        }
        if (data > node.data && node.right != null) {
           return this.searchNode(node.right, data)
        }
        return false
    }
}

module.exports = Tree;