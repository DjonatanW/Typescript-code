import { Ingresso } from "./Ingresso";

export class Camarote extends Ingresso {
  constructor(private valorIngresso: number, private valorAdicional: number) {
    super(valorIngresso)
  }

  imprimeValor(): void {
      console.log(`Valor Camarote: R$${this.valorIngresso + this.valorAdicional}`)
  }
}