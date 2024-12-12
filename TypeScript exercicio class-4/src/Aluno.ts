import { Skill } from "./Skill";
import { Turma } from "./Turma";

export class Aluno {
  constructor(
    private id: string,
    private _nome: string,
    private idade: number,
    private skills: Skill[],
    private turma: Turma
  ){}

  get nome() {
    return this._nome
  }

  listarSkills() {
    this.skills.forEach(skill => {
      console.log(`Skill: ${skill.descricao} e está ${skill.ativo === true? 'Ativo':'inativo'}`);
    })
  }
}