import { UserOrDiretor, User, Diretor } from './Tipos'

export function exibirInformacoes(lista: UserOrDiretor[]): void {
    lista.forEach((item) => {
        if ('ocupacao' in item) {
            // Trata como User
            const salarioInfo = item.salario !== undefined ? `R$ ${item.salario}` : "N/A"
            console.log(`${item.nome}, ${item.idade} anos, ${item.ocupacao}, salário ${salarioInfo}`)
        } else if ('nivelComissionamento' in item) {
            // Trata como Diretor
            const salarioInfo = item.salario !== undefined ? `R$ ${item.salario}` : "N/A"
            console.log(
                `Diretor(a) ${item.nome}, ${item.idade} anos, comissão nível ${item.nivelComissionamento}, salário ${salarioInfo}`
            )
        }
    })
}