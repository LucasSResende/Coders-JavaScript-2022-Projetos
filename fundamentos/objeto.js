const prod1 = {}
prod1.any = "Nome do atributo"
prod1.preco = 54641.55
prod1['Desconto'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: '79.90',
    
}


'{"nome": "Camisa Polo","preco": 79.90}' //JSON formato

console.log(prod2)
