// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 25,
    endereco: {
        logradouro: 'Rua 123deoliveira4',
        numero: 13218
    }
}

const{nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorado = true} = pessoa // atributos que não existem dentro do objeto virão como undefined
console.log(sobrenome, bemHumorado)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

const {conta: {ag, num}} = pessoa // Não tentar extrair caracteristicas de objetos que não existem
console.log(ag, num)
