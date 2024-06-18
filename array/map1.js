const nums = [1, 2, 2, 4, 5];

// For com propósito
// A função map() retorna um novo array com cada elemento sendo o resultado da função aplicada no array original
let resultado = nums.map(function (e) {
  // Função de mapa (e) para cada elemento no array
  return e * 2; // Retorna o dobro do elemento
});

console.log(resultado); // [2, 4, 6, 8, 10]

const soma10 = (e) => e + 10; // Função de soma de 10
const triplo = (e) => e * 3; // Função de triplo
const paraDinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`; // Função de formatação de número para dinheiro

// A função map() é aplicada três vezes no array nums, aplicando a cada elemento a função correspondente
resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado); // ['R$ 33,00', 'R$ 36,00', 'R$ 36,00', 'R$ 42,00', 'R$ 45,00']
