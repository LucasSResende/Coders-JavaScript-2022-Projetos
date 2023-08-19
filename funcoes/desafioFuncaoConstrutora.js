function Pessoa(nome) { //função, mesma forma como classe
    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('John')
p1.falar()

//classe, function e function factory podem construir objetos, de formas parecidas, mas manipulações diferentes