function tratarErroELancar(erro){
    //throw new Error('Erro de processamento')
    //throw 10
    //throw 'Lucas'
    throw {
        Nome: 'Erro 404',
        data: new Date
    }
}


function imprimirNomeGritado(obj) {

    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        tratarErroELancar(e)
    } finally {
        console.log('Finalizou')
    }
    
}

const obj = {name: 'Lucas'} // exemplo trocar name por nome e ver o erro acontecer
imprimirNomeGritado(obj)