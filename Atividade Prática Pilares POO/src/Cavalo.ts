import { Animal } from "./Animal";

export class Cavalo extends Animal {
  constructor(
    nome: string,
    raca: string
  ) {
    super(nome,raca)
  }
  somAnimal(): void {
      console.log(`O cavalo faz ihr ihr ihr`);
      
  }
}