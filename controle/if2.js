function teste1(num) {
  // estrutura de controle
  if (num > 7)
    // condição
    console.log(num); // instrução a ser executada

  console.log("Final"); // instrução a ser executada no final
}

teste1(6);
teste1(8);

function teste2(num) {
  // estrutura de controle sem ';'
  if (num > 7); // não usar ';' com estruturas de controle
  {
    //Não usar ';' com estruturas de controle
    console.log(num);
  }
}

teste2(6);
teste2(8);
