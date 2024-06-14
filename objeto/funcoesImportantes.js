// Object.keys, Object.values e Object.entries são métodos do ECMAScript 5
const pessoa = {
  nome: "Rebeca",
  idade: 2,
  peso: 13,
};

// Retorna um array com todas as chaves de um objeto
console.log(Object.keys(pessoa)); // ['nome', 'idade', 'peso']

// Retorna um array com todos os valores de um objeto
console.log(Object.values(pessoa)); // [ 'Rebeca', 2, 13 ]

// Retorna um array com pares [chave, valor] de um objeto
console.log(Object.entries(pessoa)); // [ ['nome', 'Rebeca'], ['idade', 2], ['peso', 13] ]

// Percorre o array de pares [chave, valor] e executa uma função
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`); // nome: Rebeca, idade: 2, peso: 13
});

// Define uma propriedade não enumerável de um objeto
Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: false, // define se a propriedade será ou não listada por Object.keys
  writable: false, // define se a propriedade será ou não alterada
  value: "01/01/2019", // valor da propriedade
});

// Tentativa de alterar a propriedade não enumerável
pessoa.dataNascimento = "01/01/2017";
console.log(pessoa.dataNascimento); // '01/01/2019'
console.log(Object.keys(pessoa)); // ['nome', 'idade', 'peso']

// Object.assign (ECMAScript 2015)
// Copia as propriedades de um ou mais objetos para outro objeto
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);

// Congela um objeto e faz com que suas propriedades não possam ser alteradas
Object.freeze(obj);
obj.c = 1234;
console.log(obj); // { a: 4, b: 2, c: 3 }
