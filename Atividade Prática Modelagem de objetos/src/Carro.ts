export class Carro {
    nivelCombustivel: number
    consumo: number

    constructor(consumo: number) {
        this.nivelCombustivel = 0
        this.consumo = consumo
    }

    andar(distancia: number): void {
        const consumoNecessario = distancia / this.consumo
        if (consumoNecessario > this.nivelCombustivel) {
            console.error("Combustível insuficiente para a distância.")
        } else {
            this.nivelCombustivel -= consumoNecessario
        }
    }

    obterGasolina(): number {
        return this.nivelCombustivel
    }

    adicionarGasolina(quantidade: number): void {
        this.nivelCombustivel += quantidade
    }
}