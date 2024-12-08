import { Diretor } from './Tipos'

export function exibirInformacoesDiretor(diretor: Diretor): void {
    const salarioInfo = diretor.salario !== undefined ? `R$ ${diretor.salario}` : "N/A"
    console.log(
        `Diretor(a) ${diretor.nome}, ${diretor.idade} anos, comissão nível ${diretor.nivelComissionamento}, salário ${salarioInfo}`
    )
}