function Aula(nome, videoID) {
  //Construtor recebe argumentos e os atribui a propriedades do objeto
  this.nome = nome;
  this.videoID = videoID;
}

const aula1 = new Aula("Bem Vindo", 123);
const aula2 = new Aula("Até Breve", 456);
console.log(aula1, aula2);

// simulando o new
function novo(f, ...params) {
  //Cria um novo objeto vazio
  const obj = {};
  //Define o protótipo do objeto para o protótipo do construtor (f.prototype)
  obj.__proto__ = f.prototype;
  //Aplica o construtor (f) ao objeto passando os parâmetros
  f.apply(obj, params);
  //Retorna o objeto criado
  return obj;
}

const aula3 = novo(Aula, "Bem Vindo", 123);
const aula4 = novo(Aula, "Até Breve", 456);
console.log(aula3, aula4);
