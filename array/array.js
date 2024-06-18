// Exibe o tipo de cada forma de criar um array
console.log(typeof Array, typeof new Array(), typeof []);

// Cria um array utilizando o construtor Array
let aprovados = new Array("Bia", "Carlos", "Ana");
// Mostra o array
console.log(aprovados);

// Cria um array utilizando colchetes []
aprovados = ["Bia", "Carlos", "Ana"];
// Mostra o primeiro elemento do array
console.log(aprovados[0]);
// Mostra o segundo elemento do array
console.log(aprovados[1]);
// Mostra o terceiro elemento do array
console.log(aprovados[2]);
// Tenta acessar um indice que não existe, retorna undefined
console.log(aprovados[3]);

// Substitui o valor do indice 3 e adiciona 'Paulo' ao final do array
aprovados[3] = "Paulo";
aprovados.push("Abia");
// Exibe o tamanho do array após a adição dos elementos
console.log(aprovados.length);

// Substitui o valor do indice 9, que não existe, cria um novo indice 9 no array e atribui o valor 'Rafael'
aprovados[9] = "Rafael";
// Exibe o tamanho do array após a adição dos elementos
console.log(aprovados.length);
// Exibe se o indice 8 está vazio (true) ou não (false)
console.log(aprovados[8] === undefined);

// Mostra o array
console.log(aprovados);
// Organiza o array em ordem alfabética
aprovados.sort();
// Mostra o array organizado
console.log(aprovados);

// Remove o elemento do indice 1 do array, preenchendo com undefined
delete aprovados[1];
// Mostra o segundo elemento do array
console.log(aprovados[1]);
// Mostra o terceiro elemento do array
console.log(aprovados[2]);

// Cria um array utilizando colchetes []
aprovados = ["Bia", "Carlos", "Ana"];
// Remove um elemento do array a partir do indice 1 e mantém o resto do array
aprovados.splice(1, 1);
// Mostra o array após a exclusão do elemento do indice 1
console.log(aprovados);
