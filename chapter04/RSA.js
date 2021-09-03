/**
 *
 */

const { isPrimeFactorized } = require("../chapter03/primarilyTest");
const { modularExponentiation } = require("../chapter03/modularExponentiation");

// Algoritmo para calcular d
const modInverse = (e, phi) => {
  let m0 = phi;
  let t;
  let q;
  let x0 = 0;
  let x1 = 1;

  if (phi === 1) return 0;

  while (e > 1) {
    // q es el cuociente
    q = Math.floor(e / phi);
    t = phi;

    // phi es el resto ahora, asi que procedemos
    // como el algoritmo de euclides
    phi = e % phi;
    e = t;
    t = x0;
    x0 = x1 - q * x0;
    x1 = t;
  }

  // Hace x1 positivo
  if (x1 < 0) x1 += m0;

  return x1;
};

// Algoritmo para construir el par de claves necesarias para usar RSAs
const RSAKeyPair = (p, q) => {
  // Comprobar que p y q sean primos
  if (!(isPrimeFactorized(p) && isPrimeFactorized(q))) {
    return;
  }

  // Comprobar que ellos no son el mismo número
  if (p === q) return;

  let n = p * q;
  let phi = (p - 1) * (q - 1);
  let e = 3;
  let d = modInverse(e, phi);

  // Clave pública: [e, n]
  // Clave privada: [d, n]
  return {
    publicKey: [e, n],
    privateKey: [d, n],
  };
};

const { publicKey, privateKey } = RSAKeyPair(5, 11);
console.log({
  publicKey,
  privateKey,
});
console.log("Mensaje Original: 50");

const encryption = modularExponentiation(50, publicKey[0], publicKey[1]);
console.log(`Mensaje encriptado: ${encryption}`);

const decryption = modularExponentiation(
  encryption,
  privateKey[0],
  privateKey[1]
);
console.log(`Mensaje desencriptado: ${decryption}`);
