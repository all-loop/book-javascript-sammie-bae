/**
 * La exponenciación modular es una técnica bastante común
 * en la encriptación de claves pública dentro del área de
 * criptografía.
 *
 * Su fórmula es: (x^y) % p con:
 *  . x la base
 *  . y el exponente
 *  . p el módulo
 *
 * Dado que se trabaja con números muy grandes (78 dígitos o más) es que
 * se requiere utilizar las propiedades dispuestas en la matemática modular
 * para su resolución, en específico:.
 *
 *  c % m == (a * b) % m, con a y b dos números aleatorios
 *            == [ (a % m) * (b % m)] % m
 *
 * Complejidad del tiempo: O(n), con n el valor del exponente.
 * */

function modularExponentiation(base = 1, exp = 1, mod = 1) {
  if (mod == 1) return 0;

  let value = 1;
  for (let i = 0; i < exp; i = i + 1) {
    value = (base * value) % mod;
  }
  return value;
}

const val = modularExponentiation(4, 13, 497);
// console.log(val);

module.exports = {
  modularExponentiation,
};
