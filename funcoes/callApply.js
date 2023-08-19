function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 7550,
    desc: 0.12,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) //chamada da função
console.log(produto.getPreco()) //chamada da função

const carro = { preco: 80000, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
                                                    //diferença é a forma de passar os parâmetros
console.log(getPreco.call(carro, 0.17, '$')) // parâmetros direto
console.log(getPreco.apply(global, [0.17, '$'])) // parâmetros em um array