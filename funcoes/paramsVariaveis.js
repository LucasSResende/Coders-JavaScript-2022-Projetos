// Exemplo de função que soma valores variáveis
function soma() {
  // Inicializa a variável soma com 0
  let soma = 0;
  // Percorre os argumentos da função
  for (i in arguments) {
    // Adiciona o valor do argumento atual à variável soma
    soma += arguments[i]; //Array interno disponível em qualquer função
  }
  // Retorna o valor da variável soma
  return soma;
}

// Chamada da função soma sem argumentos
console.log(soma()); // Retorna 0

// Chamada da função soma com 1 argumento
console.log(soma(1)); // Retorna 1

// Chamada da função soma com 3 argumentos numéricos
console.log(soma(1.1, 2.2, 3.3)); // Retorna 6.6

// Chamada da função soma com 3 argumentos, sendo 2 numéricos e 1 não numérico
console.log(soma(1.1, 2.2, "Teste")); // Retorna a soma de 1.1 e 2.2 e concatena a string "Teste"
// Chamada da função soma com 3 argumentos strings
console.log(soma("a", "b", "c")); // Retorna 0 e concatena com a, b e c

// Chamada da função soma sem argumentos
console.log(soma()); // Retorna 0
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3));
console.log(soma(1.1, 2.2, "Teste"));
console.log(soma("a", "b", "c"));
