// Mostra o tipo de cada objeto nativo do JavaScript
console.log(typeof String); // Retorna "function"
console.log(typeof Array); // Retorna "function"
console.log(typeof Object); // Retorna "function"

// Adiciona um novo método (método de extensão) ao prototype de String
// Permite que a string seja revertida
String.prototype.reverse = function () {
  // Transforma a string em um array, reverte o array e junta os elementos de volta em uma string
  return this.split("").reverse().join("");
};

// Exemplo de uso do novo método
console.log("Escola Cod3r".reverse()); // Retorna "r3do33ColaE"

// Adiciona um novo método (método de extensão) ao prototype de Array
// Permite que o primeiro elemento do array seja retornado
Array.prototype.first = function () {
  // Retorna o primeiro elemento do array
  return this[0];
};

// Exemplo de uso do novo método
console.log([1, 2, 3, 4, 5].first()); // Retorna 1
console.log(["a", "b", "c"].first()); // Retorna 'a'

// Substitui o método toString padrão do objeto String
// Este método é usado para converter um objeto em uma string
String.prototype.toString = function () {
  // Retorna uma string constante
  return "Lascou tudo";
};

// Exemplo de uso do novo método
console.log("Escola Cod3r".reverse()); // Retorna "Lascou tudo"
