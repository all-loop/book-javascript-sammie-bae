/**
 * Algoritmo que imprime todos los primos menores a un N dado.
 *
 * Complejidad del tiempo: O(n * sqrt(n))
 */

const { isPrimeFactorized } = require("./primarilyTest");

function allPrimeLessThanN(n) {
  for (let i = 1; i <= n; i++) {
    if (isPrimeFactorized(i)) {
      console.log(i);
    }
  }
}

allPrimeLessThanN(15);
