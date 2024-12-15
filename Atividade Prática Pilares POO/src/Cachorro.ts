import { Animal } from "./Animal";

export class Cachorro extends Animal {
  constructor(
    nome: string,
    raca: string
  ) {
    super(nome,raca)
  }
  somAnimal(): void {
      console.log(`O cachorro faz AU AU`);
      
  }
}