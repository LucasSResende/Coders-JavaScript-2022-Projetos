// Sintaxe de objeto literal
const a = 1;
const b = 2;
const c = 3;

// Criando objeto com atributos explícitos
const obj1 = { a: a, b: b, c: c };

// Criando objeto com atributos implícitos
const obj2 = { a, b, c };
// O atributo 'a' recebe o valor da variável 'a',
// o atributo 'b' recebe o valor da variável 'b'
// o atributo 'c' recebe o valor da variável 'c'
console.log(obj1, obj2);

// Criando atributo dinâmico com base em uma variável
const nomeAttr = "nota";
const valorAttr = 7.87;

const obj3 = {};
obj3[nomeAttr] = valorAttr;
// O atributo do objeto 'obj3' recebe o valor da variável 'nomeAttr'
// e o valor da variável 'valorAttr'
console.log(obj3);

// Criando atributo dinâmico com base em uma variável (outra forma)
const obj4 = { [nomeAttr]: valorAttr };
// O atributo do objeto 'obj4' recebe o valor da variável 'nomeAttr'
// e o valor da variável 'valorAttr'
console.log(obj4);

// Criando objeto com atributos de função
const obj5 = {
  // Atributo de função com nome explícito
  funcao1: function () {
    // ...
  },
  // Atributo de função com nome implícito
  funcao2() {
    // ...
  },
};
// O atributo 'funcao1' é uma função com nome explícito
// O atributo 'funcao2' é uma função com nome implícito
console.log(obj5);

// Criando atributo dinâmico com base em uma variável (outra forma)
