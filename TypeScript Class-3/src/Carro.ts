export class Carro {
  marca: string
  modelo: string 
  ano?: number

  constructor(marca: string, modelo: string, ano: number) {
    this.marca = marca
    this.modelo = modelo
    this.ano = ano 
  }

  exibirInfos() {
    console.log(`Este é um ${this.marca}, de modelo ${this.modelo} do ano ${this.ano}.`);
    
  }
}
