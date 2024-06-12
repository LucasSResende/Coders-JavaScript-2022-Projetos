// Função sem retorno

function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(3, 2); // 5
imprimirSoma(2); // Erro
imprimirSoma(3, 2, 1, 4); // Erro
imprimirSoma(); // Erro

// Função com retorno

function soma(a = 8, b = 1) {
  //função com valor padrão
  return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
