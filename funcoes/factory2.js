function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.05
    }
}


// Outra maneira de ser feito
/*
function criarProduto(nomeProd, precoProd) {
    return {
        nome: nomeProd,
        preco: precoProd,
        desconto: 0.1
    }
}
*/

console.log(criarProduto('Xiaomi', 2639.9))
console.log(criarProduto('Tablet', 2699.9))