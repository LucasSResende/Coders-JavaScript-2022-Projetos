//---------------------------------------------------------------------------------------------------
// O this em funções tradicionais
//---------------------------------------------------------------------------------------------------
let comparaComThis = function (param) {
  // (1)
  console.log(this == param); // o this dentro de uma função tradicional aponta para o objeto global
};

comparaComThis(global); // chamada direta para o objeto global

const obj = {};
comparaComThis = comparaComThis.bind(obj); // vinculando a função a um objeto
comparaComThis(global); // o this agora aponta para o objeto obj
comparaComThis(obj); // o this agora aponta para o objeto obj

//---------------------------------------------------------------------------------------------------
// O this em funções arrow
//---------------------------------------------------------------------------------------------------
let comparaComThisArrow = (param) => console.log(this == param); // (2)
comparaComThisArrow(global); // o this aponta para o objeto global
comparaComThisArrow(module.exports); // o this aponta para o objeto module.exports

comparaComThisArrow = comparaComThisArrow.bind(obj); // vinculando a função a um objeto
comparaComThisArrow(obj); // o this aponta para o objeto obj
comparaComThisArrow(module.exports); // o this aponta para o objeto obj
