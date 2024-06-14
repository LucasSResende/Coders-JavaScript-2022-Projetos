/*
 * O objetivo desta função é criar um objeto chamado Pessoa. Dentro do objeto,
 * existe uma propriedade chamada idade que é inicializada com o valor 0.
 *
 * A função utiliza o método setInterval para executar um bloco de código
 * repetidamente a cada 1000 milissegundos (1 segundo). Dentro do bloco de código,
 * o valor da propriedade idade é incrementado em 1 e o valor atual da idade é
 * impresso no console.
 *
 * O método setInterval não é executado imediatamente pois não é utilizado o
 * método bind() para ligar o contexto de execução ao objeto Pessoa. Com o bind(),
 * o valor de this dentro do bloco de código seria o objeto Pessoa, permitindo
 * que o valor da propriedade idade seja incrementado corretamente.
 *
 * A linha 27 comentada é onde o método bind() poderia ser aplicado para corrigir
 * o problema, porém, para fins de teste, foi omitido para que o código continue
 * funcionando sem o bind().
 */

function Pessoa() {
  this.idade = 0;

  const self = this;
  setInterval(
    function () {
      self.idade++;
      console.log(self.idade);
    } /*.bind(this)*/,
    1000
  );
}

new Pessoa();
