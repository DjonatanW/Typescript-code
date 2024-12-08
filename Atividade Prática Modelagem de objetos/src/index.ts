import { Contador } from "./Contador"
import { Bola } from "./Bola"
import { ContaCorrente } from "./ContaCorrente"
import { Calculadora } from "./Calculadora"
import { BombaCombustivel } from "./BombaCombustivel"
import { Carro } from "./Carro"
import { TipoCombustivel } from "./Tipos"

//Contador
const contador = new Contador()
contador.incrementar()
contador.incrementar()
console.log(contador.retornarValor())
contador.zerar()
console.log(contador.retornarValor())

//Bola
const bola = new Bola("Vermelha", 30, "Couro")
console.log(bola.mostrarCor())
bola.trocarCor("Azul")
console.log(bola.mostrarCor())

// ContaCorrente
const conta = new ContaCorrente(123, "João")
conta.deposito(100)
conta.saque(50)
conta.saque(100)

// Calculadora
const calc = new Calculadora()
console.log(calc.somar(5, 10))
console.log(calc.visualizarHistorico())

// BombaCombustivel
const bomba = new BombaCombustivel("Gasolina", 5.5, 100)
bomba.abastecerPorLitro(10)
bomba.abastecerPorValor(30)

// Carro
const carro = new Carro(15)
carro.adicionarGasolina(20)
carro.andar(150)
console.log(carro.obterGasolina())