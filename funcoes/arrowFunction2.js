//Exemplo de utilização do this com arrow functions
// o this referencia o objeto que está sendo instanciado
// o this dentro de uma arrow function é o mesmo que o this fora da função

function Gente() {
  this.idade = 0;

  setInterval(() => {
    // arrow function sem bind
    this.idade++;
    console.log(this.idade);
  }, 10); // aqui está acontecendo o que chamamos de this escapando
}

// Aqui está acontecendo o que chamamos de this escapando, ou seja, o this dentro da
// função setInterval está se referindo ao setInterval, e não mais ao objeto Gente

new Gente(); // aqui está sendo instanciado o objeto Gente
