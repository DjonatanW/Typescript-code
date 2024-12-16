import { Bicicleta } from "./Bicicleta";

export class Ciclista {
  public bicicleta: Bicicleta
  constructor(
    public nome: string
  ) {}

  criarBicicleta(marca: string, tipo: string) {
    this.bicicleta = new Bicicleta(marca, tipo)
    console.log(`${this.nome} criou uma bicicleta ${this.bicicleta.marca} ${this.bicicleta.tipo} `); 
  }

  trocarBicicleta(marca: string, tipo: string) {
    this.criarBicicleta(marca, tipo)
    console.log(`${this.nome} trocou para a bicicleta ${this.bicicleta.marca} ${this.bicicleta.tipo}`);
  }
}
