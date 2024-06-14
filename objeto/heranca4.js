function MeuObjeto() {} // Construtor de objetos

/*
Todos os objetos criados a partir de um mesmo construtor 
herdam seus atributos e métodos do prototype do construtor.
*/
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto(); // Objeto criado a partir do construtor MeuObjeto
const obj2 = new MeuObjeto(); // Outro objeto criado a partir do construtor MeuObjeto

/*
Verificando se todos os objetos criados a partir do mesmo construtor
herdam seus atributos e métodos do prototype do construtor.
*/
console.log(obj1.__proto__ === obj2.__proto__); // true
console.log(MeuObjeto.prototype === obj1.__proto__); // true

/*
Adicionando um atributo e um método ao prototype do construtor
e todos os objetos criados a partir do construtor herdam esses atributos e métodos.
*/
MeuObjeto.prototype.nome = "Anônimo";
MeuObjeto.prototype.falar = function () {
  console.log(`Bom dia! Meu nome é ${this.nome}!`);
};

obj1.falar(); // Chamando o método falar a partir do objeto obj1

obj2.nome = "Rafael";
obj2.falar(); // Chamando o método falar a partir do objeto obj2

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype; // Vinculando o objeto obj3 ao prototype do construtor
obj3.nome = "Obj3";
obj3.falar(); // Chamando o método falar a partir do objeto obj3

/*
Resumindo a loucura:
- Todo objeto criado a partir de um mesmo construtor
herda seus atributos e métodos do prototype do construtor.
*/
console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype); // true

/*
- Todo função construtora herda dos atributos e métodos do prototype de Function.prototype.
*/
console.log(MeuObjeto.__proto__ === Function.prototype); // true

/*
- Todo função construtora herda dos atributos e métodos do prototype de Object.prototype,
pois todo objeto construtor é uma função.
*/
console.log(Function.prototype.__proto__ === Object.prototype); // true

/*
- O prototype de Object.prototype é nulo, ou seja, não tem um prototype superior.
*/
console.log(Object.prototype.__proto__ === null); // true
