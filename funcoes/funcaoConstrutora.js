function Carro(velocMax = 200, delta = 5) {
    // atributo privado
    let velocAtual = 0

    // metodo publico
    this.acelerar = function () {
        if (velocAtual + delta <= velocMax)
            velocAtual += delta
        else
            velocAtual = velocMax
    }

    // metodo publico
    this.getVelocAtual = function () {
        return velocAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocAtual())

console.log(typeof Carro)
console.log(typeof ferrari)