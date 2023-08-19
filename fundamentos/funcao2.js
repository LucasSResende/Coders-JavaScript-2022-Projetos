// Armazenando uma função em uma variável

const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenar uma função arrow em uma variável

const soma = (a, b) => { //função arrow com sintaxe mais simples
    return a + b
}

console.log(soma(2, 3))

//retorno implícito
const subtracao = (a, b) => a - b // Função implícita para retorno sem chamada de um bloco
console.log(subtracao(2 , 3))