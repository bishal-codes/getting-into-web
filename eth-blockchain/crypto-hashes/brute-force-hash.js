/** Task: Finding the Color from a SHA256 Hash
 *
 * Given a SHA256 hash, your goal is to determine
 * which color from a predefined list (COLORS)
 * was used as the input to generate that hash. Since you can't reverse the hash,
 * you'll have to check each color in the list, hash it, and
 * see if it matches the given hash.
 *
 * Approach/Steps to solve the challenge:
 * 1. convert the color name into a sequence of bytes using utf8ToBytes(), which returns a Uint8Array of bytes
 * 2. hash the color bytes array using sha256(): hash is a Uint8Array(32)
 * 3. convert the resulting hash (Uint8Array) into a hexadecimal string using toHex()
 * 4. compare the hash with the given hash
 *
 * utf-8 - https://en.wikipedia.org/wiki/UTF-8
 *  - a standard that ensures consistent representation of text across different systems
 *  - standard translates all the possible keyboard characters you can think of into bytes.
 *
 * UTF-8 Encoding - Converts characters into bytes.
 *
 * utf8ToBytes() - converts a string into a sequence of bytes (Uint8Array) using UTF-8 encoding (1-4 bytes per character)
 *   - input: string
 *   - output: Uint8Array - an array of 8-bit unsigned integers
 *   - example: utf8ToBytes("red") => Uint8Array(3) [114, 101, 100]
 *   - note: each character is represented by 1-4 bytes in UTF-8 encoding or 1 byte for ASCII characters "a" => 97, "b" => 98, "r" => 114
 *
 * sha256() - generates a SHA256 hash of the input bytes (Uint8Array) and returns a Uint8Array(32) hash
 *  - input: Uint8Array
 *  - output: Uint8Array(32) - 32-byte hash value
 *  - example: sha256(Uint8Array(3) [114, 101, 100]) => Uint8Array(32) [7, 249, 31, 179, ...]
 *  - note: SHA256 produces a 32-byte hash value (256 bits) for the input bytes array
 *
 * toHex() - converts a Uint8Array into a hexadecimal string
 *  - input: Uint8Array
 *  - output: string - hexadecimal representation of the input bytes array
 *  - example: toHex(Uint8Array(32) [7, 249, 31, 179, ...]) => "07f91fb3..."
 */

import { toHex, utf8ToBytes } from "ethereum-cryptography/utils";
import { sha256 } from "ethereum-cryptography/sha256";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

function findColor(hash) {
  for (let color of colors) {
    const colorBytes = utf8ToBytes(color);
    // console.log("colorBytes:", colorBytes);
    const colorHash = sha256(colorBytes);
    // console.log("colorHash:", colorHash);
    const colorHashHex = toHex(colorHash);
    // console.log("colorHashHex:", colorHashHex);

    if (colorHashHex === hash) {
      //   console.log("The color is:", color);
      return color;
    }
  }
  //   console.log("Color not found!");
  return null;
}

export default findColor;
