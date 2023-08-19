var numero = 1 //Escopo global e de função
{
    let numero = 2 //Escopo global, função e de bloco
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)
