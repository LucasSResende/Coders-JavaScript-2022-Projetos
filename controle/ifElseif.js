Number.prototype.entre = function (inicio, fim) {
  //entre
  return this >= inicio && this <= fim; //entre
};

const imprimirResultado = function (nota) {
  //imprimir resultado
  if (nota.entre(9, 10)) {
    //entre
    console.log("Quadro de honra");
  } else if (nota.entre(7, 8.99)) {
    console.log("Aprovado");
  } else if (nota.entre(4, 6.99)) {
    console.log("Recuperação");
  } else if (nota.entre(0, 3.99)) {
    console.log("Reprovado");
  } else {
    console.log("Nota inválida");
  }

  /*     console.log('Fim')
   */
};

imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(6.55);
imprimirResultado(2.3);
imprimirResultado(-1);
imprimirResultado(11);
