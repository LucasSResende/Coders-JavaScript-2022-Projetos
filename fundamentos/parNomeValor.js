const  saudacao = 'olá' //Contexto lexico 1

function exec() {
    const saudacao = ' Tudo bem?' // Contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Ananias Marques',
        numero: 29
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)