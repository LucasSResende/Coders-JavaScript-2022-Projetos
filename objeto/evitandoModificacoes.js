// Object.preventExtensions - Impede a adição de novas propriedades ao objeto
const produto = Object.preventExtensions({
  nome: "Qualquer",
  preco: 1.99,
  tag: "promoção",
});
console.log("Extensível:", Object.isExtensible(produto));

// Tentativa de modificação de propriedades
produto.nome = "Borracha";
produto.descricao = "Borracha escolar branca";
delete produto.tag;
console.log(produto);

// Object.seal - Impede a adição de novas propriedades e a remoção de existentes
const pessoa = { nome: "Juliana", idade: 35 };
Object.seal(pessoa);
console.log("Selado:", Object.isSealed(pessoa));

// Tentativa de modificação de propriedades
pessoa.sobrenome = "Silva";
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

// Object.freeze = selado + valores constantes
