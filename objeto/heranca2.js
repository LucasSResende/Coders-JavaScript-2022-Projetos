// Definindo um atributo em Object.prototype, o que não é recomendado em um ambiente de produção
// (exceção feita aqui para fins didáticos)
Object.prototype.attr0 = "0"; // não faça isso em casa!

// Objeto avo (ancestral)
const avo = { attr1: "A" };

// Objeto pai (herança do ancestral)
const pai = {
  __proto__: avo, // atribuição do protótipo para a herança
  attr2: "B",
  attr3: "3",
};

// Objeto filho (herança do pai)
const filho = {
  __proto__: pai, // atribuição do protótipo para a herança
  attr3: "C",
};

// Acessando atributos do objeto filho a partir do protótipo
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

// Objeto carro (modelo de carro)
const carro = {
  velAtual: 0, // velocidade atual do carro
  velMax: 200, // velocidade máxima do carro
  acelerarMais(delta) {
    // método para acelerar o carro
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    // método para obter o status do carro
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
  },
};

// Objeto ferrari (herança do carro)
const ferrari = {
  modelo: "F40", // modelo do carro
  velMax: 324, // shadowing (substituição do atributo velMax do carro)
};

// Objeto volvo (herança do carro)
const volvo = {
  modelo: "V40", // modelo do carro
  status() {
    // método para obter o status do carro, sobrescrevendo o método pai
    return `${this.modelo}: ${super.status()}`; // uso de super para acessar o método pai
  },
};

// Atribuição do protótipo do pai para o filho
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

// Acelerando o carro
volvo.acelerarMais(100);
console.log(volvo.status());

// Acelerando o carro
ferrari.acelerarMais(300);
console.log(ferrari.status());
