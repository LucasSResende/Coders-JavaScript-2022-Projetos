// Método map2: Cria uma nova array com os resultados das chamadas da função callback em cada elemento do array
Array.prototype.map2 = function (callback) {
  const newArray = []; // Array onde serão armazenados os resultados da função callback
  for (let i = 0; i < this.length; i++) {
    // Chamada da função callback com o elemento atual do array, o índice e o array, e o resultado é armazenado no array newArray
    newArray.push(callback(this[i], i, this));
  }
  return newArray; // Retorna o array com os resultados
};

const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }', // Array contendo strings JSON
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }',
];

// Retornar um array apenas com os preços dos objetos

// Função para converter strings JSON em objetos
const paraObjeto = (json) => JSON.parse(json);
// Função para extrair apenas o preço de um objeto
const apenasPreco = (produto) => produto.preco;

// Aplicando o método map2 duas vezes para converter as strings JSON em objetos e extrair apenas os preços dos objetos
const resultado = carrinho.map2(paraObjeto).map2(apenasPreco);
console.log(resultado);
