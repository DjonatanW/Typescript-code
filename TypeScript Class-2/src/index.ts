import { log } from "console";
import { Usuario, Usuario1 } from "./Usuario";
import { Carro} from "./Carro"

const usuario1 = new Usuario()
const usuario2 = new Usuario()

console.log(usuario1);


usuario1.nome = 'dh'
usuario1.idade = 36

console.log(usuario1);

usuario2.nome = 'José'
usuario2.idade = 45

console.log(usuario2);

usuario1.saudacoes()




// Crie duas instâncias da classe Livro e atribua valores diferentes às suas propriedades.

import { Livro } from "./Livro";
import { Pessoa } from "./pessoa";
import { Produto, Produto1 } from "./Produto";
const livro1 = new Livro()
const livro2 = new Livro()

livro1.titulo = 'Clean code'
livro1.autor = 'Robert C. Martins'
livro1.anoPublicacao = 2011


livro2.titulo = 'Clean code 2'
livro2.autor = 'Robert C. Martins'
livro2.anoPublicacao = 2020

// Chame o método mostrarDetalhes para cada instância, verificando se as informações são exibidas corretamente.
livro1.mostrarDetalhes()
livro2.mostrarDetalhes()

const usuario = new Usuario()

usuario.nome = 'Alice'
usuario.idade = 25

console.log(usuario.obterNome());
usuario.atualizarNome('Juliana')
console.log(usuario.obterNome());



const carro = new Carro()

const pessoa = new Pessoa('Ana', 20)

pessoa.mostrarDetalhes()


const produto1 = new Produto()
produto1.mostrarDetalhes()


const usuario3 = new Usuario1('Dj', 27)
usuario3.mostrarInfos()

const produto6 = new Produto1('Notebook', 3000)
produto6.mostrarPrecoComDesconto()

const produto2 = new Produto1('Notebook', 3000, 20)
produto2.mostrarPrecoComDesconto()