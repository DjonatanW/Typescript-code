import { Ingresso } from "./Ingresso";

export class Normal extends Ingresso {
  constructor(private valorIngresso: number) {
    super(valorIngresso)
  }
}
