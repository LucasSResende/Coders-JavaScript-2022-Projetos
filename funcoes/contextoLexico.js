const valor = 'Global' // variavel global sendo chamada de qualquer lugar do codigo

function minhaFuncao() { //ela carrega o contexto lexico onde a funcao foi definida
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao() //Acha o valor global
}

exec()