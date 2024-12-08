export class Calculadora {
  historico: string[]

  constructor() {
      this.historico = []
  }

  somar(a: number, b: number): number {
      const resultado = a + b
      this.historico.push(`Somar: ${a} + ${b} = ${resultado}`)
      return resultado
  }

  multiplicar(a: number, b: number): number {
      const resultado = a * b
      this.historico.push(`Multiplicar: ${a} * ${b} = ${resultado}`)
      return resultado
  }

  dividir(a: number, b: number): number | string {
      if (b === 0) {
          const erro = "Erro: Divisão por zero."
          this.historico.push(erro)
          return erro
      }
      const resultado = a / b
      this.historico.push(`Dividir: ${a} / ${b} = ${resultado}`)
      return resultado
  }

  diminuir(a: number, b: number): number {
      const resultado = a - b
      this.historico.push(`Diminuir: ${a} - ${b} = ${resultado}`)
      return resultado
  }

  visualizarHistorico(): string[] {
      return this.historico
  }
}