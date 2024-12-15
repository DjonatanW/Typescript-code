export abstract class Ingresso {
  constructor(
    private _valorReais: number
  ) { }

  get valorReais(): number {
    return this._valorReais
  }

  imprimeValor() {
    console.log(`Valor: R$${this.valorReais}`)
  }
}

