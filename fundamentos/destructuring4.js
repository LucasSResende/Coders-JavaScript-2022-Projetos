function rand([min = 0, max = 1000]) {
  // destructuring em array e objetos
  if (min > max) [min, max] = [max, min]; // destructuring em array e objetos
  const valor = Math.random() * (max - min) + min; // destructuring em array e objetos
  return Math.floor(valor); // destructuring em array e objetos
}

console.log(rand([50, 40]));
console.log(rand([992]));
console.log(rand([, 10]));
/* console.log(rand([])) este é um problema, pois não é possível ler um valor undefined
console.log(rand()) */
