console.log('Olá, mundo! Usando TypeScript e Node');

let indefinido : undefined = undefined

let nulo: null = null

let pessoa: {
  nome: string,
  idade: number,
  conhecimentos: string[]
} = 
  {nome: 'Djonatan',
  idade: 28,
  conhecimentos: ['Typescript', 'CSS', 'HTML']
}

let idade = 36;

function exemplo(condicao: boolean): number | string {
  if(condicao) {
    return 40
  } else {
    return 'Djonatan'
  }
}
const result = exemplo(false)
console.log(result)
 
let numeros: number[] = [10,20,30]

let dobro: number[] = numeros.map((item:number) => item * 2)

console.log(dobro);

type Categorias = 'Design' | 'Codigo' | 'Sem Código' 

function pintarCategoria(categoria: Categorias): void {
  if(categoria === 'Design') {
    console.log('Pinte de vermelho');
  } else if(categoria === 'Codigo') {
    console.log('Pinte de Verde');
  } else if(categoria === 'Sem Código') {
    console.log('Pinte de roxo');
  }

}

pintarCategoria('Sem Código')

// type Produto = {
//   nome: string
//   preco: number
//   teclado: boolean
//   // calcularDesconto: (desconto: number) => void
// }

interface Pessoa {
  nome?: string
  idade: number
  // apresentar: (nome: string) => string
}

const pessoas: Pessoa[] = [
  {nome:'Alice', idade: 25},
  {nome:'José', idade: 30},
  {nome:'Maria', idade: 50},
  {idade: 56}
]

const maioresDe30 = pessoas.filter((pessoa: Pessoa) => pessoa.idade >= 30)

console.log(maioresDe30);

interface Empresa {
    nome: string
    anoFundacao: number
    pais: string
}

interface Produto {
  nome: string
  preco: number
  descricao: string
  garantia: string
  empresaFabricante: Empresa,
  empresaMontadora: Empresa
}

type ProdutoCarro = {
  preco:number
}

type Carro = {
  rodas: number
  portas: number
}

function handleProdutoCarro(dados: Carro & ProdutoCarro) {
  console.log('Preço:', dados.preco);
  console.log('Rodas:', dados.rodas);
  console.log('Portas:', dados.portas);
  
}

handleProdutoCarro({
  preco: 20000,
  rodas: 4,
  portas: 5
})

type Endereco = {endereco: string}
type Telefone = {telefone: string}

type InfoContato = Endereco | Telefone


interface Usuario {
  nome:string
}

interface TelefoneUsuario {
  telefone: string
}

interface UsuarioCompleto extends Usuario{
  email: string
}

import {PessoaAula, TefoneAula} from './tipos'

const pessoaAula: PessoaAula = {
  nome: 'Alice',
  idade: 25
}

const tefoneAula: TefoneAula = {
  telefone: '5199546489'
}


// Criar uma função chamada calcularMedia que recebe dois números como parâmetros e retorna a média desses números.

function calcularMedia(valor1: number, valor2: number): number {
  return (valor1 + valor2) / 2
}

console.log(calcularMedia(5,10))
  

// Criar uma função chamada verificarNota que recebe uma nota (número) como parâmetro. Se a nota for menor que 6, a função deve exibir um console dizendo "Reprovado".
function verificarNota(nota: number): void {
  if(nota < 6) {
    console.log('Reprovado')
  } else {
    console.log('Aprovado')
  }
}

verificarNota(8)