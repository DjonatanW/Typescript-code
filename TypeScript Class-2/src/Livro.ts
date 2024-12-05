// Crie uma classe chamada Livro com as seguintes propriedades:
// titulo (string): Título do livro.
// autor (string): Nome do autor do livro.
// anoPublicacao (number): Ano de publicação do livro.
// Adicione um método chamado mostrarDetalhes à classe. Este método deve imprimir no console uma mensagem formatada com os detalhes do livro, como "O livro 'Título' escrito por Autor foi publicado em Ano." 
export class Livro {
  titulo: string = 'Nenhum titulo'
  autor: string = 'Nenhum autor'
  anoPublicacao: number = 0
  mostrarDetalhes(): void {
    console.log(`O livro ${this.titulo} escrito por ${this.autor} foi publicado em ${this.anoPublicacao}.`);
    
  }
}

