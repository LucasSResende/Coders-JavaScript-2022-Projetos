// EXPLICAÇÃO DO CONCEITO -> Loop de repetição: For e While
// Aqui temos um exemplo de um loop de repetição while
let cont = 1;

// Enquanto a variável 'cont' for menor ou igual a 10
// O loop irá repetir o bloco de código interno
while (cont <= 10) {
  // A cada repetição, imprimiremos o valor da variável 'cont'
  console.log(`Contador = ${cont}`);
  // Incrementamos a variável 'cont' em 1
  cont++;
}

// EXPLICAÇÃO DO CONCEITO -> Loop de repetição: For e While
// Agora temos um exemplo de um loop de repetição for
for (let i = 1; i <= 10; i++) {
  // A cada repetição, imprimiremos o valor da variável 'i'
  console.log(`i = ${i}`);
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];
// EXPLICAÇÃO DO CONCEITO -> Loop de repetição: For e While
// Aqui temos um exemplo de um loop de repetição for
// Percorrendo o array 'notas'
for (let i = 0; i < notas.length; i++) {
  // A cada repetição, imprimiremos o valor do elemento atual do array 'notas'
  console.log(`nota = ${notas[i]}`);
}
