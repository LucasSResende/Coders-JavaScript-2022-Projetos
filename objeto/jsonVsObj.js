// Conceito: JSON (JavaScript Object Notation) é uma string
// que representa um objeto JavaScript.
const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c;
  },
};
console.log(JSON.stringify(obj));

// Conceito: JSON é uma string que pode ser convertida em um
// objeto JavaScript usando a função JSON.parse().
// Observe que a função JSON.parse() recebe uma string
// e retorna um objeto JavaScript.
// As linhas comentadas abaixo representam exemplos de strings JSON corretas.
//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))

// Conceito: O JSON é uma string que representa um objeto JavaScript.
// A função JSON.parse() recebe uma string JSON e retorna um objeto JavaScript.
// A string JSON abaixo representa um objeto JavaScript com as propriedades "a", "b"
// e "c", e a função JSON.parse() retorna um objeto JavaScript equivalente.
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'));

// Conceito: O JSON pode representar valores de diferentes tipos, incluindo
// números, strings, booleanos, objetos e arrays.
// A string JSON abaixo representa um objeto JavaScript com as propriedades "a", "b",
// "c", "d", "e". A função JSON.parse() retorna um objeto JavaScript equivalente.
console.log(
  JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')
);
