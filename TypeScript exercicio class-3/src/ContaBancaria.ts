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
