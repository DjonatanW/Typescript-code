import { Animal } from "./Animal";

export class Gato extends Animal {
  constructor(
    nome: string,
    raca: string
  ) {
    super(nome,raca)
  }
  somAnimal(): void {
      console.log(`O Gato faz MIAU MIAU`);
      
  }
}