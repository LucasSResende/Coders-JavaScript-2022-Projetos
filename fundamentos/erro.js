function tratarErroELancar(erro) {
  //throw new Error('Erro de processamento')
  //throw 10
  //throw 'Lucas'
  throw {
    // objeto
    Nome: "Erro 404",
    data: new Date(),
  };
}

function imprimirNomeGritado(obj) {
  // exemplo trocar name por nome e ver o erro acontecer
  try {
    // bloco de tratamento de erro
    console.log(obj.name.toUpperCase() + "!!!"); // tratamento de erro e lógica de tratamento
  } catch (e) {
    // bloco de tratamento de erro
    tratarErroELancar(e); // tratamento de erro e lógica de tratamento
  } finally {
    // bloco de tratamento de erro
    console.log("Finalizou"); // tratamento de erro e lógica de tratamento
  }
}

const obj = { name: "Lucas" }; // exemplo trocar name por nome e ver o erro acontecer
imprimirNomeGritado(obj);
