export class Bola {
  cor: string
  circunferencia?: number
  material?: string
  

  constructor(cor: string, circunferencia: number, material: string) {
    this.cor = cor
  }

  trocarCor(novaCor: string): void {
      this.cor = novaCor
  }

  mostrarCor(): string {
      return this.cor
  }
}