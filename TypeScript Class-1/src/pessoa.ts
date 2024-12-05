// Atividade extra
// Instruções:

// Crie um arquivo TypeScript (com extensão .ts) para realizar a atividade.
// Defina um tipo ou interface chamado Pessoa que represente uma pessoa com as seguintes propriedades:
interface Pessoa {
  nome: string
  idade: number
  email?: string  
  telefones?: string[]
}
// nome (string)
// idade (number)
// email (string, opcional)
// telefones (array de strings, opcional)


// Crie uma variável chamada pessoa1 que seja do tipo Pessoa e represente uma pessoa com nome, idade e email.
const pessoa1: Pessoa = {
  nome: 'Djonatan',
  idade: 28,
  email:'dj@gmail.com'
}

console.log(pessoa1);

// Crie uma variável chamada pessoa2 que seja do tipo Pessoa e represente uma pessoa com nome, idade e telefones.
const pessoa2: Pessoa = {
  nome: 'Djonatan',
  idade: 28,
  telefones: ['99999999', '1901901909']
}

console.log(pessoa2);

// Defina um tipo chamado Documento que seja uma união de tipos primitivos (string, number, boolean) para representar diferentes tipos de documentos.
type Documento =  string | number | boolean

// Crie uma variável chamada documento1 que seja do tipo Documento e atribua a ela um número.
const documento1 = 1
console.log(documento1);

// Crie uma variável chamada documento2 que seja do tipo Documento e atribua a ela uma string.
const documento2 = 'Documento de teste'
console.log(documento2);

// Defina um tipo chamado Endereco que tenha propriedades rua (string) e cidade (string).
type Endereco = {
  rua: string,
  cidade: string
}

// Crie um tipo chamado Telefone que tenha uma propriedade telefone (string).
type Telefone = {
  telefone: string 
}

// Crie um tipo chamado EnderecoTelefone que seja uma interseção de Endereco e Telefone.
type EnderecoTelefone =  Endereco | Telefone
