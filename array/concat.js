// Inicializando um array de filhas
const filhas = ["Ualeskah", "Cibalena"];

// Inicializando um array de filhos
const filhos = ["Uoxiton", "Uesclei"];

// Utilizando o método concat para combinar os arrays filhas e filhos em um novo array todos
const todos = filhas.concat(filhos);

// Exibindo o array todos, filhas e filhos no console
console.log(todos, filhas, filhos);

// Utilizando o método concat para combinar arrays e escalares em um novo array
// [1, 2] e [3, 4] são arrays, 5 é um escalar e [6, 7] é um array
console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]));
