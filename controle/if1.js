function soBoaNoticia(nota) {
  //(0,0)-(4,1)
  if (nota >= 7) {
    // if (7,0)-(7,1)
    console.log("Aprova com " + nota);
  }
}

soBoaNoticia(8.1);
soBoaNoticia(6.5);

function seForVerdadeiroEuFalo(valor) {
  if (valor) {
    // if bloco se for verdadeiro (9,0)-(13,1)
    console.log("É verdade..." + valor);
  }
}

seForVerdadeiroEuFalo(); // if falso (0,0)-(4,1)
seForVerdadeiroEuFalo(null); // if falso (0,0)-(4,1)
seForVerdadeiroEuFalo(undefined); // if falso (0,0)-(4,1)
seForVerdadeiroEuFalo(NaN); // if falso (0,0)-(4,1)
seForVerdadeiroEuFalo(""); // if falso (0,0)-(4,1)
seForVerdadeiroEuFalo(0); // if falso (0,0)-(4,1)
seForVerdadeiroEuFalo(-1); // if verdadeiro (9,0)-(13,1)
seForVerdadeiroEuFalo(" "); //verdadeiro (9,0)-(13,1)
seForVerdadeiroEuFalo("?"); // if verdadeiro (9,0)-(13,1)
seForVerdadeiroEuFalo([]); // if verdadeiro (9,0)-(13,1)
seForVerdadeiroEuFalo([1, 2]); // if verdadeiro (9,0)-(13,1)
seForVerdadeiroEuFalo({}); //   if verdadeiro (9,0)-(13,1)
