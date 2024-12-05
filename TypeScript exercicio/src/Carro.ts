export class Carro {
  marca: string
  modelo: string 
  ano?: number | undefined
  cor?: string | undefined

  constructor(marca: string, modelo: string, ano: number = 2024, cor?: string) {
    this.marca = marca
    this.modelo = modelo
    this.ano = ano ?? 2024
    this.cor = cor 
  }
}
