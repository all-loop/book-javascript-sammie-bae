/**
 * STRING SHORTENING
 * -----------------
 *
 *  Las presentes funciones se pueden usar para acortar
 *  el id asociado a una URL dentro del proceso de los
 *  acortadores de URL.
 *
 *  Los ID son acortados usando un sistema de codificación
 *  base62.
 *
 *  Codificación 62 usa:
 *   - 26 letras en minúscula
 *   - 26 letras en mayúscula
 *   - 10 números (0 al 9)
 *
 *  author: Sammie Bae
 */

const DICTIONARY =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

const encodeID = (id) => {
  let base = DICTIONARY.length;
  let encoded = "";

  if (id === 0) {
    return DICTIONARY[0];
  }

  while (id > 0) {
    encoded += DICTIONARY[id % base];
    id = Math.floor(id / base);
  }
  return reverseWord(encoded);
};

const reverseWord = (str) => {
  let reversed = "";
  for (let letter of str) {
    reversed = letter + reversed;
  }
  return reversed;
};

const decodeID = (shortString) => {
  const n = shortString.split("").length;
  let base = DICTIONARY.length;
  let decoded = 0;

  for (let i = 0; i < n; i++) {
    decoded = decoded * base + DICTIONARY.indexOf(shortString.charAt(i));
  }

  return decoded;
};

console.log(encodeID(11231230)); // print "VhU2"
console.log(decodeID("VhU2")); // prints "11231230"
