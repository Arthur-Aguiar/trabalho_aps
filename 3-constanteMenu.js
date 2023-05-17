//so de constante para representar opções de um menu:

const OPCAO_INICIAR = 1;
const OPCAO_PAUSAR = 2;
const OPCAO_PARAR = 3;
let opcaoSelecionada = 45;
if (opcaoSelecionada === OPCAO_INICIAR) {
  console.log("Opção selecionada: Iniciar");
} else if (opcaoSelecionada === OPCAO_PAUSAR) {
  console.log("Opção selecionada: Pausar");
} else if (opcaoSelecionada === OPCAO_PARAR) {
  console.log("Opção selecionada: Parar");
} else {
  console.log("Opção inválida");
}

//esse exemplo, as constantes OPCAO_INICIAR, OPCAO_PAUSAR e OPCAO_PARAR são usadas para representar opções de um menu. 
//Dependendo da opção selecionada, uma mensagem específica é exibida no console.