import { Ingresso } from "./Ingresso";

export class Vip extends Ingresso {
  constructor(private valorIngresso: number, private valorAdicional: number) {
    super(valorIngresso)
  }

  imprimeValor(): void {
      console.log(`Valor Vip: R$${this.valorIngresso + this.valorAdicional}`);
      
  }
}