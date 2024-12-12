export class Lutador {
  constructor(
    public nome: string,
    public peso: number
  ){}

  apresentar () {
    console.log(`Lutador ${this.nome} com peso de ${this.peso}`);
    
  }
}