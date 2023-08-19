{
    {
        {
            {var sera = 'Será??'} //variavel visível declarada em um bloco simples
            console.log(sera)
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(soma(local)) // Não sendo global, a variável não será acessada
