import { Aluno } from "./Aluno";
import { Skill } from "./Skill";
import { Turma } from "./Turma";


const skill = new Skill('1','HTML', true)
const skill2 = new Skill('1','C#', false)
const skill3 = new Skill('1','Java', false)
const alunoSkill: Skill[] = []
alunoSkill.push(skill)
alunoSkill.push(skill2)
alunoSkill.push(skill3)

const turma = new Turma('1', 21, 'Web FullStack', [])
const aluno = new Aluno('1', 'Djonatan', 28, alunoSkill,turma)
const aluno2 = new Aluno('2', 'Ana', 40, alunoSkill,turma)
const aluno3 = new Aluno('3', 'Simone', 23, alunoSkill,turma)
const alunos: Aluno[] = []
alunos.push(aluno)
alunos.push(aluno2)
alunos.push(aluno3)
turma.adicionarAluno(aluno)
turma.adicionarAluno(aluno2)
turma.adicionarAluno(aluno3)
turma.listarAlunos()


console.log('Aluno:', aluno)
console.log('Turma:', turma)