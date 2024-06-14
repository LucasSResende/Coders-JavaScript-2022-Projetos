// Bloco de código que cria uma função que retorna um número inteiro aleatório entre dois números fornecidos.
function getInteiroAleatoriorEntre(min, max) {
  // Utiliza a função Math.random() para gerar um número aleatório entre 0 e 1
  // Multiplica esse número pelo diferença entre o valor máximo e o valor mínimo
  // Adiciona esse valor ao valor mínimo para obter um novo valor aleatório entre os dois valores fornecidos
  const valor = Math.random() * (max - min) + min;
  // Retorna o valor arredondado para baixo utilizando a função Math.floor()
  return Math.floor(valor);
}

// Inicializa a variável opcao com 0
let opcao = 0;

// Laço "do-while" que executa o bloco de código até a condição for falsa
// A condição é que a opção escolhida pelo usuário seja diferente de -1
do {
  // Atribui ao valor da variável opcao um número inteiro aleatório entre -1 e 10 utilizando a função getInteiroAleatoriorEntre()
  opcao = getInteiroAleatoriorEntre(-1, 10);
  // Imprime a opção escolhida pelo usuário
  console.log(`Opção escolhida foi ${opcao}`);
  // Condição para continuar o laço "do-while" até ser falsa
} while (opcao != -1);

// Imprime a mensagem "Até a próxima pessoal!!!!" depois que a condição do laço "do-while" for falsa
console.log("Até a próxima pessoal!!!!");
