console.log(soma(3, 4))

//function declration - funcao pode ser chamada antes de ser declarada
function soma(x, y){
    return x + y
}

//function expression - chamar a funcao somente depois dela ser declarada
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

//named function expression - chamar a funcao somente depois dela ser declarada
const mult = function multi(x, y) {
    return x * y
}

console.log(mult(3, 4))