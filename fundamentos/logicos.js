function compras(trabalho1, trabalho2) {
  //logicos booleanos
  const comprarSorvete = trabalho1 || trabalho2; //or
  const comprarTv50 = trabalho1 && trabalho2; //and
  //const comprarTv32 = !!(trabalho1 ^ trabalho2)  //bitwise xor
  const comprarTv32 = trabalho1 != trabalho2; //xor simples
  const manterSaudavel = !comprarSorvete; //not

  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }; //objeto com recuro que recebe e atribui os valores de cada variável
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
