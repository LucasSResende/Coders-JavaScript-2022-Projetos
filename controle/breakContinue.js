// CONCEITO: Breaks e Continues
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*
    Exemplo de uso do 'break'
    O 'break' interrompe a repetição de um loop quando atingir uma determinada condição.
    Neste exemplo, quando 'x' for igual a 5, o loop é interrompido e não são mais exibidos os valores.
*/
for (x in nums) {
  if (x == 5) {
    break; // Interrompe o loop
  }
  console.log(`${x} = ${nums[x]}`);
}

/*
    Exemplo de uso do 'continue'
    O 'continue' pula para a próxima iteração de um loop quando atingir uma determinada condição.
    Neste exemplo, quando 'y' for igual a 5, o loop pula para a próxima iteração e não é exibido o valor.
*/
for (y in nums) {
  if (y == 5) {
    continue; // Pula para a próxima iteração
  }
  console.log(`${y} = ${nums[y]}`);
}

/*
    Exemplo de uso de 'break' com rótulo
    O 'break' pode ser utilizado com rótulo para interromper a repetição de um loop externo.
    Neste exemplo, quando 'a' for igual a 2 e 'b' for igual a 3, o loop externo é interrompido.
    Obs: Não é recomendado utilizar este tipo de bloco com rótulo em 'break' ou 'continue'.
*/
externo: for (a in nums) {
  for (b in nums) {
    if (a == 2 && b == 3) break externo; // Interrompe o loop externo
    console.log(`Par = ${a}, ${b}`);
  }
}

console.log("Fim");
