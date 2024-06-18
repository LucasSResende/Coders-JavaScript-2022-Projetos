// Método reduce2: método criado para adicionar um novo comportamento ao prototype de Array.
// Ele recebe dois parâmetros: callback e valorInicial.
Array.prototype.reduce2 = function (callback, valorInicial) {
  // Aqui estamos definindo um índice inicial que varia de 0 a 1, dependendo se valorInicial foi fornecido.
  const indiceInicial = valorInicial ? 0 : 1;
  // Aqui estamos definindo um acumulador que pode ser valorInicial ou o primeiro elemento do Array.
  let acumulador = valorInicial || this[0];
  // Aqui estamos percorrendo o Array, a partir do índice inicial.
  for (let i = indiceInicial; i < this.length; i++) {
    // Aqui estamos chamando a função callback, passando o acumulador, o elemento atual do Array, o índice atual e o Array em si.
    acumulador = callback(acumulador, this[i], i, this);
  }
  // Aqui estamos retornando o acumulador, o qual contém o resultado final da operação.
  return acumulador;
};

// Função soma: função que recebe dois parâmetros e retorna a soma dos dois.
const soma = (total, valor) => total + valor;
// Array nums: array com números de 1 a 6.
const nums = [1, 2, 3, 4, 5, 6];
// Aqui estamos usando o método reduce2 para somar todos os números do array nums, começando do valor 21.
console.log(nums.reduce2(soma, 21));
