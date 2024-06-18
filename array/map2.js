// Array que contém objetos JSON
const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }',
];

// Função para converter strings JSON em objetos
const paraObjeto = (json) => JSON.parse(json);
// Função para extrair apenas o preço de um objeto
const apenasPreco = (produto) => produto.preco;

// Utilizando o método map para aplicar a função paraObjeto em cada elemento do array carrinho
// O resultado é um novo array com objetos convertidos
const resultado = carrinho.map(paraObjeto);
// Aplicando novamente o método map para extrair apenas o preço de cada objeto do array resultado
// O resultado final é um array com apenas os preços dos objetos
const resultadoFinal = resultado.map(apenasPreco);
console.log(resultadoFinal);
