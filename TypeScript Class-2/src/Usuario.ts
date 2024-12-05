export class Usuario {
  nome: string = 'Não informado'
  idade: number = 0
  email?: string

  saudacoes(): void {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade}`); 
  }
  obterNome(): string {
    return this.nome
  }

  atualizarNome(nome: string) {
    this.nome = nome
  }
}

const usuario1 = {
  nome: 'Djonatan',
  idade: 28,
  email: 'dj@getMaxListeners.com'
}
console.log(`Olá, meu nome é ${usuario1.nome} e tenho ${usuario1.idade}`);

export class Usuario1  {
  nome: string 
  idade?: number | undefined
  email?: string  | undefined

  constructor(nome: string, idade?: number, email?: string) {
    this.nome = nome
    this.idade = idade
    this.email = email
  }
  mostrarInfos() {
    console.log(`Nome: ${this.nome}`);
    if(this.idade) {
      console.log(`Idade: ${this.idade}`);
    }

    if(this.email) {
      console.log(`Idade: ${this.email}`);
    }
    
  }
}