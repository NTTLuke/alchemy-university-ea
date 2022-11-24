
Given a SHA256 hash, find the color input that would generate that hash. You can assume that all the hashes be generated only from colors provided in the `COLORS` array.

1.  To take the hash of a color, first use `utf8ToBytes` to translate the string to bytes. Then, use `sha256` to hash it.
2.  When you want to compare two hashes, first use `toHex` to turn each hash from a [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) to a string of hexadecimal characters.

So comparing two hashes would look like this:

```
const a = "apple";
const b = "banana";

const aBytes = utf8ToBytes(a);
const bBytes = utf8ToBytes(b);

const aHash = sha256(aBytes);
const bHash = sha256(bBytes);

console.log(toHex(aHash) === toHex(aHash)); // true
console.log(toHex(aHash) === toHex(bHash)); // false
```

> Wondering what utf8 stands for? The UTF-8 standard translates all the possible keyboard characters you can think of into bytes. This is an agreed upon standard to ensure we all get the same bit values representing the letters and words we see on the screen. Learn more about [utf8 here](https://en.wikipedia.org/wiki/UTF-8)