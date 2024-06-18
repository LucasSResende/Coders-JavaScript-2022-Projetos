const produtos = [
  // Coleção de objetos de produtos
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de Vidro", preco: 12.49, fragil: true },
  { nome: "Copo de Plástico", preco: 18.99, fragil: false },
];

// Aplicando o método filter para retornar um array vazio
console.log(
  produtos.filter(function (p) {
    return false;
  })
);

// Criando funções de alta ordem para filtragem dos produtos
const caro = (produto) => produto.preco >= 500;
const fragil = (produto) => produto.fragil;

// Aplicando o método filter para retornar um array de produtos caros e frágeis
console.log(produtos.filter(caro).filter(fragil));
