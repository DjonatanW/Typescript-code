export abstract class ContaBancaria {
  constructor(protected _numeroConta: string, private _saldo: number) { 
    this._saldo = _saldo >= 0 ? _saldo : 0
  }
  
  get numeroConta() : string {
    return this._numeroConta
  }

  set numeroConta(numeroConta : string) {
    this._numeroConta = numeroConta;
  }
  
  get saldo() : number {
    return this._saldo
  }

  set saldo(saldo : number) {
    if(saldo >= 0) {
      this._saldo = saldo;
    } else {
      console.log(`Saldo irá ficar negativo. O saldo irá ficar ${saldo}`);
    }
  }

  depositar(valor: number): void {
    if (valor <= 0) {
        throw new Error("O valor do depósito deve ser maior que zero.");
    }
    this.saldo += valor
    }

  sacar(valor: number): void {
    if (valor <= 0) {
        throw new Error("O valor do saque deve ser maior que zero.");
    }
    if (valor > this.saldo) {
        throw new Error("Saldo insuficiente.");
    }
    this.saldo -= valor
  }
}
