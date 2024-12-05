export class Pessoa {
  nome: string
  idade: number

  constructor(nome: string, idade: number) {
    this.nome = nome
    this.idade = idade
  }

  mostrarDetalhes() {
    console.log(`Olá, meu nome é ${this.nome} com idade de ${this.idade}`);
    
  }
}