import { User } from './Tipos'

export class UserManager {
    private users: User[] = []
    
    addUser(nome: string, idade: number, ocupacao: string, salario?: number): void {
        const newUser: User = { nome, idade, ocupacao, salario }
        this.users.push(newUser)
        console.log(`User added: ${nome}`)
    }

    listUsers(): void {
        if (this.users.length === 0) {
            console.log("No users available.")
            return
        }

        console.log("User list:")
        this.users.forEach((user) => {
            const salarioInfo = user.salario !== undefined ? `R$ ${user.salario}` : "N/A"
            console.log(`${user.nome}, ${user.idade} anos, ${user.ocupacao}, salário ${salarioInfo}`)
        });
    }
}