const imprimirResultado = function(nota) {
    if(nota>= 7) {
        console.log('Aprovado')
    } else{
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // Evitar tipo de problema pela comparação, devido a ser fracamente tipada
