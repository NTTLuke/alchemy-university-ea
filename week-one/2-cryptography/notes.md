## Cryptography

## RSA and ECDSA

Today, both **RSA** and **ECDSA** are two popularly used algorithms for public key cryptography.

The [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) algorithm is based on the idea that it's very easy to find the product of two prime numbers, yet extremely difficult to factor out those two prime numbers if you have the product. You can see this [example on Wikipedia](https://en.wikipedia.org/wiki/RSA_(cryptosystem)#Example) for a good rundown.

> 
> 
> 
> [P Versus NP Problem](https://en.wikipedia.org/wiki/P_versus_NP_problem)
> 

The [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) algorithm uses elliptic curves. It can provide the same level security as other public key algorithms with smaller key sizes, which is the reason it's become quite popular. It is the Digital Signing Algorithm used by Bitcoin, specifically the [secp256k1](https://en.bitcoin.it/wiki/Secp256k1) curve.

Resources : [Secure Hash Algorithms - Practical Cryptography for Developers (nakov.com)](https://cryptobook.nakov.com/cryptographic-hash-functions/secure-hash-algorithms)



NOTE After we have the message hash we can sign it with our private key to prove that a particular address votes yes on proposal 327. You may have found yourself doing something similar if you have ever signed a message in web3. When you send a transaction to a blockchain you also sign a hashed representation of that transaction before sending it to a blockchain node.


## Signing the Hash

It's time to sign a message using our **private key** to prove our intention!

When signing a message with secp256k1 we can return the signature along with the [recovery bit](https://cryptobook.nakov.com/digital-signatures/ecdsa-sign-verify-messages#ecdsa-public-key-recovery-from-signature), allowing us to recover the public key from the signature. This will allow a blockchain node to take a signature of a transaction and understand which address authenticated this particular transaction.

> 
> 
> 
> *authenticates*
> 



Let's sign a message!

1. First step is to hash it using the `hashMessage` function you created in the last stage (we've already imported it for you on line 2)
2. Once you have the message hash, use the `sign` method from [ethereum-cryptography](https://github.com/paulmillr/noble-secp256k1#signmsghash-privatekey).

## Note

```
* The `sign` method will take your message hash along with the constant `PRIVATE_KEY` declared at the top of the file. This private key is a valid key that could be used to authorize blockchain transactions. **Never use this specific key** because it is published on the internet, so many people including yourself could authenticate with this specific private key. In future lessons we'll be discussing good private key hygene to avoid losing funds.

```

```
* The ethereum-cryptography library uses `noble-secp256k1`, so the import comes from `ethereum-cryptography` but the detailed documentation is in the readme of `noble-secp256k1`.

```

3. The `sign` method takes an optional third parameter called `options`, which you'll see in the documentation. Use this parameter to return the recovered bit so that the public key can be recovered from this signature.


## Recover PK
Recover the Public Key
When the signature is passed with all of its components (recovery bit included), the public key can be recovered. This means that blockchain nodes will be able to understand who signed the transaction that was sent to them. A transaction could indicate the user would like to send 1 ether to another address and provide a certain transaction fee. Since the signature signs the hash containing this intention, it is enough to authenticate this action entirely.



## Public Key to Address
Bitcoin and Ethereum both have a transformation process to take a public key and turn it into an address. For Bitcoin it includes a checksum and Base58 encoding. Ethereum's address transformation is quite a bit simpler, its address is the last 20 bytes of the hash of the public key.

The important thing to recognize here is that the address is differentiated from the public key, but you can always derive the address if you have the public key.

Let's get the ethereum address from the public key!

- First step, you'll need to take the first byte off the public key. The first byte indicates the format of the key, whether it is in the compressed format or not. The publicKey will be a Uint8Array so you can use the slice method to slice off the first byte.
- Next, take the keccak hash of the rest of the public key.
- Finally, take the last 20 bytes of the keccak hash and return this. Once again, you can make use of the slice method.