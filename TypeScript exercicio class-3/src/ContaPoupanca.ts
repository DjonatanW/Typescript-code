import { ContaBancaria } from "./ContaBancaria"

export class ContaPoupanca extends ContaBancaria {
  constructor(protected _numeroConta: string, _saldo: number) {
    super(_numeroConta, _saldo)
  }
  calcularJuros(taxa: number) {
    if(taxa <= 0) {
      console.log('O valor da taxa é negativo, favor informe um valor válido positivo.')
    }
    this.saldo += this.saldo * ( taxa / 100)
  }
}
