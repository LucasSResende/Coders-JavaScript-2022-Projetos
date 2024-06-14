// Objeto pai
const pai = { nome: "Pedro", corCabelo: "preto" };

// Criação de objeto filha1
const filha1 = Object.create(pai);
filha1.nome = "Ana"; // Atribuição de propriedade ao objeto
console.log(filha1.corCabelo); // Acesso a propriedade herdada

// Criação de objeto filha2 com configuração de propriedade
const filha2 = Object.create(pai, {
  nome: { value: "Bia", writable: false, enumerable: true }, // Configuração de propriedade
});

console.log(filha2.nome); // Acesso a propriedade
filha2.nome = "Carla"; // Tentativa de modificação de propriedade somente-leitura
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`); // Acesso a propriedade herdada

// Lista de propriedades
console.log(Object.keys(filha1)); // Lista de propriedades do objeto filha1
console.log(Object.keys(filha2)); // Lista de propriedades do objeto filha2

// Verificação de propriedades
for (let key in filha2) {
  // Percorre todas as propriedades do objeto
  filha2.hasOwnProperty(key) // Verifica se a propriedade é própria do objeto
    ? console.log(key)
    : console.log(`Por herança: ${key}`); // Exibe a propriedade própria ou a propriedade herdada
}
