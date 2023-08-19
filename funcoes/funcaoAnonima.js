const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma)//função anônima 
{
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function(x, y) //função anônima 
{
    return x - y
})
imprimirResultado(3, 4, (x, y) => x *y) //função anônima

const pessoa = {  
    falar: function() {  //função anônima
        console.log('E aí')
    }
}

pessoa.falar()