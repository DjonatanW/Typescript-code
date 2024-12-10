
// **1.** Crie uma classe **`Pessoa`** com as propriedades **`nome`** e **`idade`**. Adicione um método **`mostrarDetalhes`** que exiba as informações da pessoa.
// **2.** Expanda a classe **`Pessoa`** adicionando um método que calcula e retorna a idade em dias.
export class Pessoa {
  constructor(private _idade: number) {}

  public get idade(): number {
    return this.idade
  }

  public set idade(idade: number) {
    this._idade = idade
  }
}