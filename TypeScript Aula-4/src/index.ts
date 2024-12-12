import { log } from "console"

interface Animal {
  nome:string
  emitirSom(): void
}

class Cachorro implements Animal {
  constructor(
    public nome: string
  ){}

  emitirSom(): void {
      console.log(`${this.nome} fez AU AU!`);      
  }
}

const meuCachorro = new Cachorro('Totó')
meuCachorro.emitirSom()

