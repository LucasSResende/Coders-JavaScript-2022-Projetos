const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3)); //Valor na tabela ASCII do índice 3 da string
console.log(escola.indexOf("3")); //Indice da string

console.log(escola.substring(1)); //começa no indice 1
console.log(escola.substring(0, 3)); //começa no indice 0 e termina no indice 3

console.log("Escola ".concat(escola).concat("!")); //concatenar
console.log("Escola " + escola + "!"); //concatenar
console.log(escola.replace(3, "e")); //substituir
console.log(escola.replace(/\d/, "e")); // /\d/ -> REGEX substituir dígito  /\w/g -> REGEX substituir toda a string

console.log("Ana,Maria,Pedro".split(",")); //dividir a string
