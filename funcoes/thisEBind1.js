// bind() -> É uma função que permite alterar o valor do this dentro de uma função
// O this é uma referência a um objeto, e ele é responsável por definir o escopo de variaveis e funções
const pessoa = {
  saudacao: "Bom dia!",
  falar() {
    // esta função é uma arrow function
    console.log(this.saudacao); // Aqui utilizamos o this, que é uma referência ao objeto pessoa
  },
};

pessoa.falar(); // chamada da função normalmente

const falar = pessoa.falar; // Aqui estamos pegando a função e atribuindo a uma constante
falar(); // chamando a função sem o objeto, o this não se refere a pessoa, então não exibe nada

const falarDePessoa = pessoa.falar.bind(pessoa); // bind define o this sem utilizá-lo
falarDePessoa(); // chamando a função com bind(), o this agora se refere a pessoa

const falar2 = pessoa.falar; // Aqui estamos pegando a função e atribuindo a uma constante
falar2(); // chamando a função normalmente, o this não se refere a pessoa, então não exibe nada
