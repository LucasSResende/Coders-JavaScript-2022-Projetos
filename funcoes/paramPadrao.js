// Estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
  // Verifica se a variável foi definida, se não, atribui o valor padrão de 1
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0));

// Estratégias 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
  // Verifica se a variável foi definida, se não, atribui o valor padrão de 1
  a = a !== undefined ? a : 1;
  // Verifica se o indice 1 existe no array de argumentos, se não, atribui o valor padrão de 1
  b = 1 in arguments ? b : 1;
  // Verifica se o valor é NaN, se for, atribui o valor padrão de 1
  c = isNaN(c) ? 1 : c;
  return a + b + c;
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0));

// Estratégias 5 para gerar valor padrão es2015

// Define os valores padrão diretamente nas funções
function soma3(a = 1, b = 1, c = 1) {
  return a + b + c;
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0));
