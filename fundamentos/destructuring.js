// novo recurso do ES2015

const pessoa = {
  // objeto
  nome: "Ana",
  idade: 25,
  endereco: {
    logradouro: "Rua 123deoliveira4",
    numero: 13218,
  },
};

const { nome, idade } = pessoa; // destructuring
console.log(nome, idade);

const { nome: n, idade: i } = pessoa; // atributos que não existem dentro do objeto virão como undefined
console.log(n, i); // Ana 25

const { sobrenome, bemHumorado = true } = pessoa; // atributos que não existem dentro do objeto virão como undefined
console.log(sobrenome, bemHumorado);

const {
  // objetos aninhados de destructuring
  endereco: { logradouro, numero, cep },
} = pessoa;
console.log(logradouro, numero, cep);

const {
  conta: { ag, num },
} = pessoa; // Não tentar extrair caracteristicas de objetos que não existem
console.log(ag, num);
