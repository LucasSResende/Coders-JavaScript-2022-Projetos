// Extensão do objeto Array: adiciona método filter2
Array.prototype.filter2 = function (callback) {
  const newArray = []; // Array vazio para armazenar os elementos filtrados
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      // Se o callback retornar true para o elemento i
      newArray.push(this[i]); // Adiciona o elemento i ao array newArray
    }
  }
  return newArray; // Retorna o array newArray com os elementos filtrados
};

const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true }, // Objeto com informações sobre um produto
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de Vidro", preco: 12.49, fragil: true },
  { nome: "Copo de Plástico", preco: 18.99, fragil: false },
];

const caro = (produto) => produto.preco >= 500; // Função que retorna true se o preço do produto for maior ou igual a 500
const fragil = (produto) => produto.fragil; // Função que retorna true se o produto for considerado frágil

console.log(produtos.filter2(caro).filter2(fragil)); // Filtra os produtos caros e frágeis e imprime o resultado no console
