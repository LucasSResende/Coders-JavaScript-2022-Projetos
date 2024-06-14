// (17-19) - Função Arrow (=>)
// É uma forma mais simplificada de escrever funções, sendo mais utilizada para funções pequenas e callbacks.
let dobro = function (a) {
  return 2 * a; // Função comum
};

dobro = (a) => {
  return 2 * a; // Função Arrow com retorno explicito
};

dobro = (a) => 2 * a; // Função Arrow com retorno implícito

console.log(dobro(Math.PI));

// (24-26) - Função Arrow com parâmetro
let ola = function () {
  return "Olá"; // Função comum
};

ola = () => "Olá"; // Função Arrow com retorno explícito

ola = (_) => "olá"; // Função Arrow com parâmetro opcional
console.log(ola());
