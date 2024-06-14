// Objetos literais
const obj1 = {}; // Criando um objeto vazio
console.log(obj1); // Imprimindo o objeto criado

// Instanciando um objeto usando a função do JavaScript
console.log(typeof Object, typeof new Object()); // Imprimindo o tipo do objeto e da função construtora
const obj2 = new Object(); // Criando um objeto usando a função construtora Object
console.log(obj2); // Imprimindo o objeto criado

// Funções construtoras
function Produto(nome, preco, desc) {
  // Criando função construtora de Produto
  this.nome = nome; // Definindo atributo nome
  this.getPrecoComDesconto = () => {
    // Definindo método para calcular o preço com desconto
    return preco * (1 - desc); // Retornando o preço com desconto
  };
}

const p1 = new Produto("Caneta", 7.99, 0.15); // Criando objeto Produto com os parâmetros
const p2 = new Produto("Notebook", 2998.99, 0.25); // Criando objeto Produto com os parâmetros
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto()); // Imprimindo o preço com desconto dos objetos Produto

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
  // Criando função Factory de Funcionario
  return {
    // Retornando um objeto com os atributos e métodos
    nome, // Definindo atributo nome
    salarioBase, // Definindo atributo salarioBase
    faltas, // Definindo atributo faltas
    getSalario() {
      // Definindo método para calcular o salário
      return (salarioBase / 30) * (30 - faltas); // Retornando o salário
    },
  };
}

const f1 = criarFuncionario("João", 7980, 4); // Criando objeto Funcionario com os parâmetros
const f2 = criarFuncionario("Maria", 11400, 1); // Criando objeto Funcionario com os parâmetros
console.log(f1.getSalario(), f2.getSalario()); // Imprimindo o salário dos objetos Funcionario

// Object.create
const filha = Object.create(null); // Criando um objeto usando a função Object.create com null como protótipo
filha.nome = "Ana"; // Definindo atributo nome
console.log(filha); // Imprimindo o objeto criado

// Função para converter um JSON em um objeto JavaScript
const fromJSON = JSON.parse('{"info": "Sou um JSON"}'); // Convertendo um JSON em um objeto JavaScript
console.log(fromJSON.info); // Imprimindo o valor do atributo 'info'
