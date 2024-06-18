// Criando uma função que permite a execução de uma função de retorno de chamada para cada elemento do array
// O método "forEach" é uma forma de realizar o mesmo resultado desta função manualmente
Array.prototype.forEach2 = function (callback) {
  // Percorrendo o array
  for (let i = 0; i < this.length; i++) {
    // Executando a função de retorno de chamada com o elemento atual do array, o índice e o array
    callback(this[i], i, this);
  }
};

// Criando um array de aprovados
const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

// Utilizando o método "forEach2" para percorrer o array "aprovados" e imprimir o índice e o nome de cada pessoa
aprovados.forEach2(function (nome, indice) {
  // Imprimindo o índice e o nome de cada pessoa
  console.log(`${indice + 1}) ${nome}`);
});
