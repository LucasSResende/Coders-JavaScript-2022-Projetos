function rand({ min = 0, max = 1000 }) {
  // destructuring em objetos e objetos aninhados de destructuring
  // destructuring em objetos
  const valor = Math.random() * (max - min) + min; // destructuring em objetos
  return Math.floor(valor);
}

const obj = { max: 50, min: 40 }; // destructuring em objetos
console.log(rand(obj));
console.log(rand({ min: 955 }));
console.log(rand({})); // destructuring em objetos vazios
console.log(rand());
