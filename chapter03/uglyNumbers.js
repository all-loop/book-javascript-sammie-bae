/**
 * Un número Ugly es aquel que sólo tiene como factores los
 * primos 2, 3 y 5. Por convención se incluye el 1 dento de ellos,
 * de modo que los 11 números ugly serian:
 *
 * 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, ...
 *
 * Tiempos de Complejidad:
 * -----------------------
 * - maxDivide: O(log_divisor(n))
 * - isUgly: O(log_2(n)) // log_2 es el que consume más tiempo entre los logs
 * - allNUglyNumbers: O(n * log_2(n))
 */

function maxDivide(number = 1, divisor = 2) {
  while (number % divisor === 0) {
    number = number / divisor;
  }
  return number;
}

function isUgly(n) {
  n = maxDivide(n, 2);
  n = maxDivide(n, 3);
  n = maxDivide(n, 5);

  return n === 1;
}

function allNUglyNumbers(n) {
  // Devuelve los primeros n ugly numbers
  let i = 1;
  while (n > 0) {
    if (isUgly(i)) {
      n = n - 1;
      console.log(i);
    }
    i++;
  }
}

allNUglyNumbers(11);
