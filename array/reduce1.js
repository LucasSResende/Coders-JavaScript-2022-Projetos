//Array de objetos com informações de alunos
const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true },
];

//Extrai apenas as notas dos alunos usando o método map
console.log(alunos.map((a) => a.nota));

//Soma as notas dos alunos usando o método reduce
//A função reduce recebe um array e retorna um valor único
//A função acumulador recebe o valor acumulado e o valor atual
//O valor inicial é 0
const resultado = alunos
  .map((a) => a.nota)
  .reduce(function (acumulador, atual) {
    //Imprime o valor acumulado e o valor atual
    console.log(acumulador, atual);
    //Retorna a soma do valor acumulado com o valor atual
    return acumulador + atual;
  }, 0);

//Imprime o resultado da soma das notas dos alunos
console.log(resultado);
