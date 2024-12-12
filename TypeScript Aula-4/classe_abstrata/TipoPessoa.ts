export abstract class TipoPessoa {
  protected abstract nome: string
  protected abstract sobrenome: string
  
  protected abstract nomeCompleto(): string 
  
}