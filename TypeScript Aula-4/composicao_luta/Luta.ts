import { Lutador } from "./Lutador";

export class Luta {
  private lutador1: Lutador
  private lutador2: Lutador

  constructor(
    nomeLutador1: string,
    pesoLutador1: number,
    nomeLutador2: string,
    pesoLutador2: number
  ){
    this.lutador1 = new Lutador(nomeLutador1, pesoLutador1)
    this.lutador2 = new Lutador(nomeLutador2, pesoLutador2)
  }

  iniciarLuta() {
    console.log(`===Início da luta ===`);
    this.lutador1.apresentar()
    this.lutador2.apresentar()
    
  }
}