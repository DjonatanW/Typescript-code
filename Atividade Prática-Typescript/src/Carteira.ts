export class Carteira {
  saldo: number
  entrada: number
  saida: number

  constructor(saldo: number, entrada: number, saida: number) {
    this.saldo = saldo
    this.entrada = entrada
    this.saida = saida
  }

  lancarEntrada(valor: number) {
    this.saldo += valor
    this.entrada += valor
  }

  lancarSaida(valor: number): boolean {
    if(this.saldo < valor) {
      console.log(`Valor de retirada maior que o saldo. Saldo disponível ${this.saldo}`);
      return false
    } else {
      this.saldo -= valor
      this.saida += valor
      return true
    }
  }

  mostrarSucesso() {
    console.log(`Operação realizada com sucesso! Valor de saldo de ${this.saldo} e o valor total de entradas ${this.entrada} e o valor total de saída ${this.saida}`);
  }
}