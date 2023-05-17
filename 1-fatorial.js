
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

//declaramos um vetor chamado numeros e preenchemos com os valores 1, 2, 3, 4 e 5, 
//separados por vírgulas, dentro de colchetes []. Esses valores são elementos do vetor, 
//e cada elemento é acessado por um índice.

//é fornecido o número 5 como entrada. A função calcularFatorial é chamada com esse número, 
//e o resultado é armazenado na variável fatorial. Em seguida, é exibida uma mensagem no console com o número e seu fatorial correspondente.