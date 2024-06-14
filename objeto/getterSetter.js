// criação de um objeto com uma propriedade privada e suas propriedades de acesso (getter e setter)
const sequencia = {
  // propriedade privada
  _valor: 1, // convenção
  // propriedade de acesso (getter)
  // retorna o valor da propriedade privada e incrementa em 1 após cada chamada
  get valor() {
    // retorna o valor da propriedade privada
    return this._valor++;
  },
  // propriedade de acesso (setter)
  // verifica se o novo valor é maior que o valor atual, caso seja, atualiza o valor da propriedade privada
  set valor(valor) {
    // verifica se o novo valor é maior que o valor atual
    if (valor > this._valor) {
      // atualiza o valor da propriedade privada
      this._valor = valor;
    }
  },
};

// chamada da propriedade de acesso (getter)
console.log(sequencia.valor, sequencia.valor); // _valor: 1, 2
sequencia.valor = 1000; // atualização da propriedade privada através da propriedade de acesso (setter)
console.log(sequencia.valor, sequencia.valor); // _valor: 1000, 1001
sequencia.valor = 900; // tentativa de atualização da propriedade privada através da propriedade de acesso (setter), mas não será atualizada
console.log(sequencia.valor, sequencia.valor); // _valor: 1000, 1002
