/**
 * Função que calcula a área de um retângulo.
 * @param {number} largura - Largura do retângulo.
 * @param {number} altura - Altura do retângulo.
 * @return {number} Área do retângulo.
 */
function area(largura, altura) {
  // Calcula a área multiplicando a largura por altura.
  const area = largura * altura;

  // Verifica se a área é maior que 20.
  if (area > 20) {
    // Se sim, exibe uma mensagem com o valor acima do permitido.
    console.log(`Valor acima do permitido: ${area}m²`);
  } else {
    // Se não, retorna a área.
    return area;
  }
}

// Exemplo de chamada da função com dois parâmetros.
console.log(area(2, 2));

// Exemplo de chamada da função com um parâmetro.
console.log(area(2));

// Exemplo de chamada da função sem parâmetros.
console.log(area());

// Exemplo de chamada da função com muitos parâmetros.
console.log(area(2, 3, 17, 22, 44));

// Exemplo de chamada da função com dois parâmetros corretos.
console.log(area(5, 5));
