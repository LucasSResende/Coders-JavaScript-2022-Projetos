// Dados da escola
const escola = [
  {
    nome: "Turma M1",
    alunos: [
      {
        nome: "Gustavo",
        nota: 8.1,
      },
      {
        nome: "Ana",
        nota: 9.3,
      },
    ],
  },
  {
    nome: "Turma M2",
    alunos: [
      {
        nome: "Rebeca",
        nota: 8.9,
      },
      {
        nome: "Roberto",
        nota: 7.3,
      },
    ],
  },
];

// Função para obter a nota de um aluno
const getNotaDoAluno = (aluno) => aluno.nota;

// Função para obter as notas de uma turma
const getNotasDaTurma = (turma) => turma.alunos.map(getNotaDoAluno);

// Obtém as notas de cada turma usando o método map
const notas1 = escola.map(getNotasDaTurma);
console.log(notas1);

// Obtém as notas de cada turma concatenando os arrays resultantes
console.log([].concat([8.1, 9.3], [8.9, 7.3]));

// Adiciona o método flatMap à classe Array
Array.prototype.flatMap = function (callback) {
  // Aplica o callback a cada elemento do array e concatena os arrays resultantes
  return Array.prototype.concat.apply([], this.map(callback));
};

// Obtém as notas de cada turma usando o método flatMap
const notas2 = escola.flatMap(getNotasDaTurma);
console.log(notas2);
