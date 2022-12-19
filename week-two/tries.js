//ex 2 Insert 

class TrieNode {
    constructor(key) {
        this.key = key;
        this.children = {};
        this.isWord = false;
    }
}

module.exports = TrieNode;



const TrieNode = require('./TrieNode');

class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    insert(word){

        let lastNode=this.root;
        
        for(let i=0;i<word.length;i++) {

            let currChar=word.charAt(i);
            let currNode=new TrieNode(currChar);
            if(lastNode.children[currChar] === undefined)
                lastNode.children[currChar]= currNode;   
            else
                lastNode.children[currChar] = lastNode.children[currChar];
            
            lastNode=lastNode.children[currChar];
        }

        lastNode.isWord=true;
    }

    contains(word){
        
        
        let node = this.root.children;
        
        for (let i = 0; i < word.length; i++) {
            var wordChar = word.charAt(i).toString();
            let dd = "h";

            //console.log(node[wordChar].key, i);

            if(node[wordChar] === undefined)
               return false;

            if(node[wordChar].key != wordChar)
            {
                return false;
            }

            // //console.log("node key ", node[currChar].key);
            if(i === word.length - 1 ){
                console.log(node);
                if(!node[wordChar].isWord)
                    return false;
            }

            node = node[wordChar].children;
        }
        
        //console.log(node);

        return true;


    }
}

module.exports = Trie;