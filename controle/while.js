/**
 * Retorna um número inteiro aleatório entre min e max
 *
 * @param {number} min - menor valor do intervalo
 * @param {number} max - maior valor do intervalo
 * @return {number} - número inteiro aleatório
 */
function getInteiroAleatoriorEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1) {
  opcao = getInteiroAleatoriorEntre(-1, 10);
  console.log(`Opção escolhida foi ${opcao}.`);
}

console.log("Até a próxima!");
