//Definição de uma classe Lancamento com propriedades nome e valor com valor padrão 'Genérico' e 0
class Lancamento {
  constructor(nome = "Genérico", valor = 0) {
    this.nome = nome;
    this.valor = valor;
  }
}

//Definição de uma classe CicloFinanceiro com propriedades mes e ano, e um array de lancamentos
class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes;
    this.ano = ano;
    this.lancamentos = [];
  }

  //Método para adicionar lancamentos ao array de lancamentos da classe
  addLancamentos(...lancamentos) {
    lancamentos.forEach((l) => this.lancamentos.push(l));
  }

  //Método para calcular o valor total dos lancamentos no array de lancamentos da classe
  sumario() {
    let valorConsolidado = 0;
    this.lancamentos.forEach((l) => {
      valorConsolidado += l.valor;
    });
    return valorConsolidado;
  }
}

//Instância de um lancamento com nome 'Salario' e valor 45000
const salario = new Lancamento("Salario", 45000);

//Instância de um lancamento com nome 'Luz' e valor -220
const contaDeLuz = new Lancamento("Luz", -220);

//Instância de um ciclo financeiro com mes 6 e ano 2018
const contas = new CicloFinanceiro(6, 2018);

console.log(Lancamento);
console.log(CicloFinanceiro);

console.log(contas);
console.log(salario);
console.log(contaDeLuz);

//Adiciona os lancamentos salário e conta de luz ao array de lancamentos da classe ciclo financeiro
contas.addLancamentos(salario, contaDeLuz);

//Exibe o valor total dos lancamentos no console
console.log(contas.sumario());
