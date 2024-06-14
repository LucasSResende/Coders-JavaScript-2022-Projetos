// Coleção dinâmica de pares chave/valor
const produto = new Object();
produto.nome = "Cadeira"; // Atribuição de valor à chave "nome"
produto["marca do produto"] = "Generica"; // Atribuição de valor à chave "marca do produto"
produto.preco = 220; // Atribuição de valor à chave "preco"

console.log(produto); // Exibe o objeto no console
delete produto.preco; // Remove a chave "preco" do objeto
delete produto["marca do produto"]; // Remove a chave "marca do produto" do objeto
console.log(produto); // Exibe o objeto no console

const carro = {
  modelo: "A4", // Atribuição de valor à chave "modelo"
  valor: 89000, // Atribuição de valor à chave "valor"
  proprietario: {
    nome: "Raul", // Atribuição de valor à chave "nome" do objeto "proprietario"
    idade: 56, // Atribuição de valor à chave "idade" do objeto "proprietario"
    endereco: {
      logradouro: "Rua ABC", // Atribuição de valor à chave "logradouro" do objeto "endereco" do objeto "proprietario"
      numero: 123, // Atribuição de valor à chave "numero" do objeto "endereco" do objeto "proprietario"
    },
  },
  condutores: [
    {
      nome: "Junior", // Atribuição de valor à chave "nome" do objeto do array "condutores"
      idade: 19, // Atribuição de valor à chave "idade" do objeto do array "condutores"
    },
    {
      nome: "Ana", // Atribuição de valor à chave "nome" do objeto do array "condutores"
      idade: 42, // Atribuição de valor à chave "idade" do objeto do array "condutores"
    },
  ],
  calcularValorSeguro: function () {
    // ...
  },
};

carro.proprietario.endereco.numero = 1000; // Atribuição de valor à chave "numero" do objeto "endereco" do objeto "proprietario" do objeto "carro"
carro["proprietario"]["endereco"]["logradouro"] = "Av Gigante"; // Atribuição de valor à chave "logradouro" do objeto "endereco" do objeto "proprietario" do objeto "carro"
console.log(carro); // Exibe o objeto "carro" no console

delete carro.proprietario.endereco; // Remove a chave "endereco" do objeto "proprietario" do objeto "carro"
delete carro.calcularValorSeguro; // Remove a chave "calcularValorSeguro" do objeto "carro"
console.log(carro); // Exibe o objeto "carro" no console
console.log(carro.condutores); // Exibe o array "condutores" do objeto "carro" no console
console.log(carro.condutores.length); // Exibe o comprimento do array "condutores" do objeto "carro" no console
