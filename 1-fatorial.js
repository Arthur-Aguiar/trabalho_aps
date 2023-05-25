
const numero = 4;
const fatorial = calcularFatorial(numero);

    function calcularFatorial(n) {
  if (n === 0) {
    return 1; // Caso base: fatorial de 0 é 1
  } else {
    return n * calcularFatorial(n - 1); // Chamada recursiva do fatorial
  }
}

console.log(`O fatorial de ${numero} é ${fatorial}`);