let a = 3; // variável normal

global.b = 123;

this.c = 456; // variável global
this.d = false;
this.e = "teste";

console.log(a); // variável normal
console.log(global.b); // variável global
console.log(this.c); // variável global
console.log(module.exports.c); // variável global
console.log(module.exports === this); // variável global
console.log(module.exports); // variável global

// criando uma variável maluca: sem var e sem let
abc = 3; //não é uma boa pratica
console.log(global.abc);

// module.exports = { e: 456, f: false, g: 'teste' }
