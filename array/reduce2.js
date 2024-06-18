const alunos = [
  { nome: "João", nota: 7.3, bolsista: false }, // Objeto
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true },
];

// Desafio 1: Todos os alunos são bolsista?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista; // Função de redução
console.log(alunos.map((a) => a.bolsista).reduce(todosBolsistas)); // Todos os alunos são bolsistas?

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista; // Função de redução
console.log(alunos.map((a) => a.bolsista).reduce(algumBolsista)); // Algum aluno é bolsista?
