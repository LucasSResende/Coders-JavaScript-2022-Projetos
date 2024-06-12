let valor; // não inicializada porém declarada
console.log(valor); // undefined - ausencia de valor (não inicializada)

valor = null; // ausencia de valor
console.log(valor);

const produto = {}; //objeto vazio
console.log(produto.preco); // undefined
console.log(produto); // {}

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined; //evite atribuir undefined
console.log(produto.preco);
//delete produto.preco
console.log(produto);

produto.preco = null; // sem preço
console.log(!!produto.preco);
console.log(produto);
