// Objeto array chamado "aprovados" contendo nomes de pessoas
const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

// Utilizando o método "forEach" para percorrer o array "aprovados" e imprimir o índice e o nome de cada pessoa
aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1}) ${nome}`);
});

// Utilizando a arrow function para percorrer o array "aprovados" e imprimir o nome de cada pessoa
aprovados.forEach((nome) => console.log(nome));

// Criando uma função chamada "exibirAprovados" que recebe o nome de uma pessoa como parâmetro e imprime o nome da pessoa
const exibirAprovados = (aprovado) => console.log(aprovado);

// Utilizando o método "forEach" para percorrer o array "aprovados" e passar cada nome como parâmetro para a função "exibirAprovados"
aprovados.forEach(exibirAprovados);
