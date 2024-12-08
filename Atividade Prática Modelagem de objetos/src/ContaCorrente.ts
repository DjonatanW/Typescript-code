export class ContaCorrente {
  numero: number
  nome: string
  saldo: number

  constructor(numero: number, nome: string, saldo: number = 0) {
      this.numero = numero
      this.nome = nome
      this.saldo = saldo
  }

  alterarNome(novoNome: string): void {
      this.nome = novoNome
  }

  deposito(valor: number): void {
      this.saldo += valor
  }

  saque(valor: number): void {
      if (valor > this.saldo) {
          console.error("Saldo insuficiente.")
      } else {
          this.saldo -= valor
      }
  }
}