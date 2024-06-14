// criando um objeto com chave e valor
// pessoa -> 123 -> { nome: 'Joao' }
const pessoa = { nome: "Joao" };

// alterando o valor de uma propriedade de um objeto
// pessoa -> 123 -> { nome: 'Pedro' }
pessoa.nome = "Pedro";
console.log(pessoa);

// pessoa -> 456 -> { nome: 'Ana' } // comentado para não alterar o objeto
// pessoa = { nome: 'Ana' }

// bloqueando todas as alterações no objeto
// pessoa -> 456 -> { nome: 'Pedro', end: 'Rua ABC' }
Object.freeze(pessoa); // O método Object.freeze() congela um objeto, evitando qualquer alteração no seu estado.

// tentando alterar o valor de uma propriedade de um objeto bloqueado
// pessoa -> 456 -> { nome: 'Pedro', end: 'Rua ABC' }
pessoa.nome = "Maria";
pessoa.end = "Rua ABC";

// tentando deletar uma propriedade de um objeto bloqueado
// pessoa -> 456 -> { nome: 'Pedro', end: 'Rua ABC' }
delete pessoa.nome;

// exibindo o valor de uma propriedade de um objeto bloqueado
// 'Pedro'
console.log(pessoa.nome);

// exibindo o objeto bloqueado
// { nome: 'Pedro', end: 'Rua ABC' }
console.log(pessoa);

// criando um objeto com chave e valor e bloqueando todas as alterações
// pessoaConstante -> 789 -> { nome: 'Joao' }
const pessoaConstante = Object.freeze({ nome: "Joao" });

// tentando alterar o valor de uma propriedade de um objeto bloqueado
// pessoaConstante -> 789 -> { nome: 'Joao' }
pessoaConstante.nome = "Maria";

// exibindo o objeto bloqueado
// { nome: 'Joao' }
console.log(pessoaConstante);
