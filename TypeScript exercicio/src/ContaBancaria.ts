export class ContaBancaria {
  titular: string
  saldo: number | 0

  constructor(titular: string, saldo: number = 0) {
    this.titular = titular
    this.saldo = saldo
  }

  sacar(valor: number) {
    this.saldo -= valor 
  }

  mostrarSaldo() {
    console.log(`O saldo disponível é de R$${this.saldo}`);
    
  }
}