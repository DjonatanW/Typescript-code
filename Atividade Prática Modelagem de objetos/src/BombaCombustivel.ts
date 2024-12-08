import { TipoCombustivel } from "./Tipos"

export class BombaCombustivel {
    constructor(
        private tipoCombustivel: TipoCombustivel,
        private valorLitro: number,
        private quantidadeCombustivel: number
    ) {}

    abastecerPorValor(valor: number): void {
        const litros = valor / this.valorLitro
        if (litros > this.quantidadeCombustivel) {
            console.error("Quantidade insuficiente na bomba.")
        } else {
            this.quantidadeCombustivel -= litros
            console.log(`Abastecido ${litros.toFixed(2)} litros.`)
        }
    }

    abastecerPorLitro(litros: number): void {
        const valor = litros * this.valorLitro
        if (litros > this.quantidadeCombustivel) {
            console.error("Quantidade insuficiente na bomba.")
        } else {
            this.quantidadeCombustivel -= litros
            console.log(`Valor a pagar: R$${valor.toFixed(2)}`)
        }
    }

    alterarValor(novoValor: number): void {
        this.valorLitro = novoValor
    }

    alterarCombustivel(novoTipo: TipoCombustivel): void {
        this.tipoCombustivel = novoTipo
    }

    alterarQuantidadeCombustivel(novaQuantidade: number): void {
        this.quantidadeCombustivel = novaQuantidade
    }
}