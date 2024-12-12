import { Aluno } from "./Aluno";

export class Turma {
  constructor(
    private id: string,
    private edicao: number,
    private programa: string,
    private alunos: Aluno[]
  ) {}

  listarAlunos() {
    console.log(`${this.edicao} - ${this.programa}`);
    this.alunos.forEach(aluno => {
      console.log(`Aluno: ${aluno.nome}`);
      aluno.listarSkills()
    })
  }

  adicionarAluno(aluno: Aluno){
    this.alunos.push(aluno)
  }


}