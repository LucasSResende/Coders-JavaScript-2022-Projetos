// Exemplo de um loop de repetição "for in"
// Utilizando o "for in" percorremos um array e um objeto
// A cada repetição, imprimimos o índice ou atributo e o valor

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

// Loop de repetição "for in" no array "notas"
for (let i in notas) {
  console.log(i, notas[i]); // Exemplo de uso do "for in" no array
}

const pessoa = {
  nome: "Ana",
  sobrenome: "Silva",
  idade: 29,
  peso: 62,
};

// Loop de repetição "for in" no objeto "pessoa"
for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`); // Exemplo de uso do "for in" no objeto
}
