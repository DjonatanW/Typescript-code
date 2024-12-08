export type Product = {
  id: number
  name: string
  price: number
}

export type User = {
  nome: string
  idade: number
  ocupacao: string
  salario?: number
}

export type Diretor = {
  nome: string
  idade: number
  salario?: number 
  nivelComissionamento: number 
}

export type UserOrDiretor = User | Diretor