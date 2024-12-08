
// 1. Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.

import { Carteira } from "./Carteira"
import { exibirInformacoesDiretor } from "./Diretor"
import { Nota } from "./Nota"
import { ProductManager } from "./Produto"
import { Diretor } from "./Tipos"
import { User } from "./Tipos"
import { UserManager } from "./Usuario"
import { exibirInformacoes } from './UsuarioDiretor';


function calcularMedia(valor1: number, valor2: number) {
  return ((valor1 + valor2) / 2 >= 6)
}
console.log(calcularMedia(6,5))

// 2. Crie uma função que receba uma lista de objetos contendo nota e
// peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado
 
const notas = new Nota(5,10,5,10)
console.log(notas.mostraDuasNotas())
console.log(notas.mostraTresNotas())

// 3. Crie um programa que simule uma carteira de dinheiro. Este
// programa vai precisar ter uma carteira contendo saldo, transações
// de entrada e saídas. Ou seja, será um objeto com estas
// propriedades. Depois crie uma função para lançar uma entrada e
// uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
// um erro ou avisar.

const carteira = new Carteira(100, 0, 0 ) 
carteira.lancarEntrada(10)
carteira.mostrarSucesso()
carteira.lancarSaida(20)
carteira.mostrarSucesso()


const productManager = new ProductManager()
productManager.addProduct("Laptop", 1500)
productManager.addProduct("Mouse", 50)
productManager.addProduct("Keyboard", 100)
productManager.addProduct("Monitor", 200)

productManager.listProducts()

productManager.deleteProduct(3)
productManager.listProducts()


const userManager = new UserManager()
userManager.addUser("Daphne", 23, "Analista de TI", 5000)
userManager.addUser("Carlos", 30, "Desenvolvedor frontend")
userManager.addUser("Fernanda", 28, "Designer", 3500)
userManager.addUser("Djonatan", 28, "Desenvolver FullStack", 5500)

userManager.listUsers()

const diretor1: Diretor = {
  nome: "Daphne",
  idade: 23,
  salario: 1000,
  nivelComissionamento: 5,
}

const diretor2: Diretor = {
  nome: "Carlos",
  idade: 45,
  nivelComissionamento: 7, 
}

exibirInformacoesDiretor(diretor1)
exibirInformacoesDiretor(diretor2)


const lista: (User | Diretor)[] = [
  {
      nome: "Daphne",
      idade: 23,
      ocupacao: "analista de TI",
      salario: 1000,
  },
  {
      nome: "Carlos",
      idade: 45,
      nivelComissionamento: 7,
  },
  {
      nome: "Fernanda",
      idade: 28,
      ocupacao: "designer gráfico",
  },
  {
      nome: "Eduardo",
      idade: 50,
      salario: 5000,
      nivelComissionamento: 10,
  },
];

// Exibindo informações
exibirInformacoes(lista)