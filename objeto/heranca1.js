// Declarando os objetos ferrari e volvo
const ferrari = {
  modelo: "F40", // Propriedade do objeto
  velMax: 324, // Propriedade do objeto
};

const volvo = {
  modelo: "V40", // Propriedade do objeto
  velMax: 200, // Propriedade do objeto
};

// Acessando os protótipos dos objetos
console.log(ferrari.prototype); // undefined, pois objetos não possuem prototype
console.log(ferrari.__proto__); // Obtém o prototype do construtor do objeto
console.log(ferrari.__proto__ === Object.prototype); // Verifica se o prototype do objeto é igual ao prototype do Object
console.log(volvo.__proto__ === Object.prototype); // Verifica se o prototype do objeto é igual ao prototype do Object
console.log(Object.prototype.__proto__ === null); // Verifica se o prototype do Object é igual a null

// Declarando a função construtora MeuObjeto
function MeuObjeto() {}

// Acessando os protótipos das funções construtoras
console.log(typeof Object, typeof MeuObjeto); // Retorna "function" para ambas
console.log(Object.prototype, MeuObjeto.prototype); // Retorna o prototype do Object e o prototype da função construtora
