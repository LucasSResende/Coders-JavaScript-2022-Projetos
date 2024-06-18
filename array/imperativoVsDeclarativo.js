const alunos = [
  { nome: "João", nota: 7.9 },
  { nome: "Maria", nota: 9.2 },
];

// Imperativo (imperativo) - loop for
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
  // imperativo - acesso a um elemento do array
  total1 += alunos[i].nota;
}
// imperativo - cálculo da média
console.log(total1 / alunos.length);

// Declarativo (declarativo) - map e reduce
// declarativo - criação de uma função getNota
const getNota = (aluno) => aluno.nota;
// declarativo - criação de uma função soma
const soma = (total, atual) => total + atual;

// declarativo - uso de map para extrair notas dos alunos
// declarativo - uso de reduce para somar as notas
const total2 = alunos.map(getNota).reduce(soma);
// declarativo - cálculo da média
console.log(total2 / alunos.length);
