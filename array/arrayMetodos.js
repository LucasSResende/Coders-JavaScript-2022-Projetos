// Array: Pilotos de Fórmula 1
const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];

// "pop" remove o último elemento do array
pilotos.pop(); // Massa quebrou o carro!
console.log(pilotos);

// "push" adiciona um elemento ao final do array
pilotos.push("Verstappen");
console.log(pilotos);

// "shift" remove o primeiro elemento do array
pilotos.shift(); // Remove o primeiro!
console.log(pilotos);

// "unshift" adiciona um elemento ao início do array
pilotos.unshift("Hamilton");
console.log(pilotos);

// "splice" pode adicionar e remover elementos do array

// Adicionar
pilotos.splice(2, 0, "Bottas", "Massa"); // Adiciona Bottas e Massa no índice 2
console.log(pilotos);

// Remover
pilotos.splice(3, 1); // Remove 1 elemento a partir do índice 3 (Massa)
console.log(pilotos);

// "slice" cria um novo array com os elementos selecionados

// Selecionar a partir do índice 2 até o final do array
const algunsPilotos1 = pilotos.slice(2); // Novo array
console.log(algunsPilotos1);

// Selecionar a partir do índice 1 até, mas não incluindo, o índice 4
const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);
