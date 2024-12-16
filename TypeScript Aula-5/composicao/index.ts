import { Ciclista } from "./Ciclista";

const ciclista = new Ciclista('Djonatan')
ciclista.criarBicicleta('Caloi', 'MTPB')
ciclista.trocarBicicleta('Uma marca', 'speed')



class Professor {
  constructor(
    public nome:string
  ) {}

  contratar() {
    console.log(`professor ${this.nome} contratado.`);
    
  }
}

class Universidade {
  public professores: Professor[] = []
  constructor(
    professores?: Professor[]
  ) {
    if(professores) {
      this.professores = professores
    }
  }

  adicionarProfessor(professor: Professor) {
    this.professores.push(professor)
    professor.contratar()
    console.log(`Professor ${professor.nome} adicionado.`);
    
  }

  listarProfessores() {
    if(this.professores.length = 0) {
      console.log('Nenhum professor cadastrado.');
    } else {
      console.log('Lista de professores:');
      this.professores.forEach( professor => {
        console.log(professor.nome);
      }) 
    }
  }
}

const professor1 = new Professor('Djonatan')
const professor2 = new Professor('Carla')

const universidade = new Universidade([professor1])

universidade.adicionarProfessor(professor2)


universidade.listarProfessores()