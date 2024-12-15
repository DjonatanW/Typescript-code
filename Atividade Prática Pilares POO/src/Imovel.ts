export class Imovel {
  constructor(
    private _endereco: string,
    private _preco: number
  ) {}

  get endereco(): string {
    return this._endereco
  }

  get preco(): number {
    return this._preco
  }
}