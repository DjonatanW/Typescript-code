
// **1.** Crie uma classe **`Pessoa`** com as propriedades **`nome`** e **`idade`**. Adicione um método **`mostrarDetalhes`** que exiba as informações da pessoa.
// **2.** Expanda a classe **`Pessoa`** adicionando um método que calcula e retorna a idade em dias.
export class Pessoa {
  nome: string 
  idade: number

  constructor(nome: string, idade: number) {
    this.nome = nome
    this.idade = idade
  }

  mostrarDetalhes() {
    console.log(`Nome ${this.nome} com idade de ${this.idade}`);
  }

  retornarIdadeEmDias(): number {
    return this.idade * 365
  }
}