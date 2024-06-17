// Esta é uma classe base 'Avo' que recebe um sobrenome na sua construção
class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome;
  }
}

// Esta é uma classe derivada 'Pai' que herda de 'Avo' e recebe um sobrenome e uma profissão
// na sua construção. O sobrenome é passado para a classe base 'Avo' e a profissão é atribuída
// a uma nova propriedade 'profissao' na classe derivada.
class Pai extends Avo {
  constructor(sobrenome, profissao = "Professor") {
    super(sobrenome);
    this.profissao = profissao;
  }
}

// Esta é uma classe derivada 'Filho' que herda da classe 'Pai'. Ela sobrescreve o método
// 'constructor' da classe 'Pai' e passa o sobrenome 'Silva' para a classe base 'Avo'.
class Filho extends Pai {
  constructor() {
    // Passa o sobrenome 'Silva' para a classe base 'Pai' que, por sua vez, o passa para a
    // classe base 'Avo'.
    super("Silva");
  }
}

// Cria uma nova instância da classe 'Filho' e a exibe no console.
const filho = new Filho();
console.log(filho);
