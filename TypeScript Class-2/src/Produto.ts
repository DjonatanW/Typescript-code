export class Produto {
  nome: string
  preco: number

  constructor(nome: string = 'Produto Genérico', preco: number = 10) {
    this.nome = nome
    this.preco = preco
  }

  mostrarDetalhes() {
    console.log(`${this.nome} custa ${this.preco}`);
    
  }
}

export class Produto1 {
  nome: string
  preco: number
  desconto?: number | undefined

  constructor(nome: string, preco: number, desconto?: number) {
    this.nome = nome
    this.preco = preco
    this.desconto = desconto ?? 0
  }

  mostrarPrecoComDesconto() {
    const precoFinal = this.preco - (this.preco * (this.desconto ?? 0) / 100)
    console.log(`${this.nome} custa ${precoFinal}`);
    
  }
}