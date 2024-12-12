import { Aluno } from "./Alunos";

export class Turma {
  private alunos: Aluno[] = []
  constructor(
    public nomeTurma: string
  ) {}

  adicionarAluno(nome: string, idade: number) {
    const aluno = new Aluno(nome, idade)
    this.alunos.push(aluno)
  }

  listarAlunos() {
    console.log(`Alunos da turma ${this.nomeTurma}`);
    this.alunos.forEach(aluno => aluno.apresentar())
    
  }
}