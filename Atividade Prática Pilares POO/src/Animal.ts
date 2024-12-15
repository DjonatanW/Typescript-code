export abstract class Animal {
  constructor(
    private _nome: string,
    private _raca: string
  ) {}

  get nome(): string {
    return this._nome
  }

  get raca(): string {
    return this._raca
  }

  somAnimal() {
    console.log(`Som genérico do animal`)
  }
}