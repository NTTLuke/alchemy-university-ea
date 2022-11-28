
//I'm not familiar with React so I wrote a script in order to simulate the client-server flow based on the assumptions, 
//the exercise constraints and goals.

//To secure the transaction, the goal is to validate the signature to be sure the transaction has been created by the owner of the sender address.
//The constraint is to protect the private key w/o send it to the server.

//Run the script : node .\script.js 
//expected result: Transaction committed 

const secp = require("ethereum-cryptography/secp256k1");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");
const { sha256 } = require("ethereum-cryptography/sha256");


//##################
// CLIENT SIDE 
//##################
//simulating info stored on metamask : private key, public key and address of the sender
const privateKey = toHex(secp.utils.randomPrivateKey());
const publicKey = toHex(secp.getPublicKey(privateKey));
//the public address (last 20bytes of the public key)
const address = publicKey.slice(-40);

// console.log(privateKey);
// console.log("Public Key", publicKey);
// console.log("Public Address", address);

//start the transaction 
//transaction (tx) for this exercise is composed by sender, recipient and the amount of the transaction
const sender = address;
const recipient = "recipient address";
const amount = 10;

//To sign a transaction we need to create the hash 
//Create HASH => sender, recipient, amount
var hash = sha256(utf8ToBytes(sender + recipient + amount));
//console.log("hash", toHex(hash));

//sign the hash with private key with recovered option meaning we can retrive the public address of the 
const signature = secp.signSync(hash, privateKey, { recovered: true });

//SIMULATE : send the tx to the server .. something like this
//NO PRIVATE KEY is sent to the server ;) 
let tx  = {
    sender : sender,
    recipient : recipient,
    amount : amount,
    hash :  hash,
    signature : signature
}

//##################
// SERVER SIDE 
//##################

//SIMULATE: server receives the transaction 

//retrieving the public key for getting the address
let publicKeyRetrieved = secp.recoverPublicKey(tx.hash, tx.signature[0], tx.signature[1]);
//get the address only 
let addressRecovered =  toHex(publicKeyRetrieved).slice(-40);
//console.log("address recovered", addressRecovered);

//compare the sender with the address recovered 
//must be the same to be sure the sender is the owner of the address
//since only the address owner owns the private key for generating the right signature
let txIsValid = tx.sender  === addressRecovered;
//console.log(txIsValid);

if(!txIsValid){ 
    //revert the transaction 
    console.log("Tx Reverted");
}

//commit the transaction 
console.log("Transaction committed");







