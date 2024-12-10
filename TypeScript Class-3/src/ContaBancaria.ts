export class ContaBancaria {
  constructor(private _valor: number) {}

  get valor(): number {
    return this._valor
  }

  set valor(novoValor: number) {
    if(novoValor >=5) {
      this._valor = novoValor
    } else {
      console.log('O valor informado é inválido');
    }
    
  }
}