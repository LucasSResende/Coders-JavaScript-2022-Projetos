//Exemplo de uma função declarada com função anônima
const soma = function (x, y) {
  return x + y;
};

//Exemplo de uma função com parâmetro opcional que recebe uma função anônima
const imprimirResultado = function (
  a,
  b,
  operacao = soma //(21)
) {
  console.log(operacao(a, b));
};

//Exemplo de chamada da função 'imprimirResultado' com função anônima
imprimirResultado(3, 4); //(22)
imprimirResultado(3, 4, soma); //(22)
imprimirResultado(3, 4, function (x, y) {
  //(22)
  return x - y;
});
imprimirResultado(3, 4, (x, y) => x * y); //(22)

//Exemplo de um objeto com uma função anônima
const pessoa = {
  falar: function () {
    //(23)
    console.log("E aí");
  },
};

//Chamada da função 'falar' no objeto 'pessoa'
pessoa.falar(); //(23)
pessoa.falar();
