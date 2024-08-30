import { TextEncoder, TextDecoder } from "util";
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

import { toHex, utf8ToBytes } from "ethereum-cryptography/utils";
import { sha256 } from "ethereum-cryptography/sha256";
import findColor from "../crypto-hashes/brute-force-hash.js";

describe("find color of input hash", () => {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

  const colorHashes = colors.map((color) => {
    const colorBytes = utf8ToBytes(color);
    const colorHash = sha256(colorBytes);
    return { color, hash: toHex(colorHash) };
  });

  colorHashes.forEach(({ color, hash }) => {
    it(`should find the correct color (${color}) for the given hash`, () => {
      expect(findColor(hash)).toBe(color);
    });
  });

  it("should return null for an unknown hash", () => {
    const unknownHash = sha256(utf8ToBytes("unknown"));
    expect(findColor(toHex(unknownHash))).toBeNull();
  });
});
