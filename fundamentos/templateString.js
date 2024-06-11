const nome = "Lucas";
const concatenacao = "Olá " + nome + "!";
const template = ` 
    Olá
    ${nome}!`; // expressão dentro de string sempre iniciando com ${}
console.log(concatenacao, template);

//expressões

console.log(`1 + 1 = ${1 + 1}`);

const up = (texto) => texto.toUpperCase();
console.log(`Ei... ${up(`cuidado`)}!`); //expressão dentro de string sempre começando com ${}
