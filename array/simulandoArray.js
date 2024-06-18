// Um objeto que parece um array, mas não é um array
const quaseArray = { 0: "Rafael", 1: "Ana", 2: "Bia" };
// Imprimindo o objeto
console.log(quaseArray);
// Adicionando uma função ao objeto para que ele possa imprimir como um array
Object.defineProperty(quaseArray, "toString", {
  // A função retorna os valores do objeto
  value: function () {
    return Object.values(this);
  },
  // A propriedade é não enumerável, ou seja, não aparecerá ao percorrer o objeto
  enumerable: false,
});
// Acessando o primeiro elemento do "array"
console.log(quaseArray[0]);
// Imprimindo o "array" como um array e um array real
const meuArray = ["Rafael", "Ana", "Bia"];
console.log(quaseArray.toString(), meuArray);
