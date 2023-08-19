// Função sem retorno

function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(3, 2)
imprimirSoma(2)
imprimirSoma(3, 2, 1, 4)
imprimirSoma()

// Função com retorno

function soma(a = 8, b = 1){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))