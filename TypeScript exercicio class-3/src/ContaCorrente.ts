import { ContaBancaria } from "./ContaBancaria";

export class ContaCorrente extends ContaBancaria {
  constructor(protected _numeroConta: string, _saldo: number, protected _chequeEspecial: number) {
    super(_numeroConta, _saldo)
  }

  get chequeEspecial() : number {
    return this._chequeEspecial
  }

  set chequeEspecial(chequeEspecial : number) {
    if(chequeEspecial >= 0) {
      this._chequeEspecial = chequeEspecial;
    } else {
      console.log(`Cheque especial irá ficar negativo. O valor irá ficar ${chequeEspecial}`);
    }
  }
  usarChequeEspecial(valor: number) {
    if(valor <= 0) {
      console.log('O valor é negativo, favor informe um valor válido positivo.')
    } else if (valor > this._chequeEspecial) {
      console.log('Valor solicitado maior que o valor do cheque especial')
    } else {
      this._chequeEspecial -= valor
      this.saldo += valor 
    } 
  }
}
