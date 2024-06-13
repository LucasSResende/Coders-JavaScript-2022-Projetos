const [a] = [10];
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]; //desestruturando arrays
console.log(n1, n3, n5, n6); // 10 9 8 0 porque o terceiro elemento foi desestruturado e o valor foi atribuído como 0

const [, [, nota]] = [
  //desestruturando arrays dentro de arrays e atribuindo valores a variáveis correspondentes a cada array desestruturado (0,0) (1,0) (2,0) (2,1)
  [, 8, 8],
  [9, 6, 8],
];
console.log(nota);
