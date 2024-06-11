let a = 7;
let b = 94;

// trocar os valores das variáveis

/* let c = 0;
console.log(a, b, c);
c = a;
console.log(a, b, c);
a = b;
console.log(a, b, c);
b = c;
console.log(a, b, c); */

[a, b] = [b, a];
console.log("a = " + a, "b = " + b);
