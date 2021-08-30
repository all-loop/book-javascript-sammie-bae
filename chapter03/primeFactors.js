function primeFactors(n) {
  // Imprime el número de 2s que dividen a n
  while (n % 2 === 0) {
    console.log(2);
    n = n / 2;
  }

  // n es impar en este punto. Asi que nos podemos saltar un elemento (note i = i + 2)
  for (let i = 3; i * i <= n; i = i + 2) {
    // Mientras i divide n, imprimir i y dividir n
    while (n % i === 0) {
      console.log(i);
      n = n / i;
    }
  }

  // Esta condición es para manejar el caso cuando n es un
  // número primo mayor que 2.
  if (n > 2) {
    console.log(n);
  }
}

primeFactors(10);
