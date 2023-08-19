class Pessoa { //classe
    constructor(nome) { // como em java
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`) //acessa a variavel que entrou pelo contrutor
    }
}

const p1 = new Pessoa('Zé')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`) //acessa a variavel que entrou pelo contrutor no escopo mais abrangente
    }
}
const p2 = criarPessoa('Zão')
p2.falar()
