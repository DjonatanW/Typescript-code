export class Nota {
  nota1: number
  peso1:number
  nota2: number
  peso2:number
  nota3: number
  peso3:number

  constructor(nota1: number, peso1: number, nota2: number, peso2:number, nota3: number = 0, peso3: number = 0) {
    this.nota1 = nota1
    this.peso1 = peso1
    this.nota2 = nota2
    this.peso2 = peso2
    this.nota3 = nota3
    this.peso3 = peso3
  }

  mostraDuasNotas() {
    console.log(`Lista com 2 notas: (${this.nota1} * ${this.peso1}) + (${this.nota2} * ${this.peso2}) / 2 = ${(this.nota1 * this.peso1) + (this.nota2 * this.peso2) / 2}`)
  }
  
  mostraTresNotas() {
    console.log(`Lista com 3 notas: (${this.nota1}* ${this.peso1}) + (${this.nota2}*${this.peso2}) + (${this.nota3}*${this.peso3}) / 3 = ${((this.nota1 * this.peso1) + (this.nota2 * this.peso2) + (this.nota3 * this.peso3)) / 3}`)
  }


}