import { log } from "util";
import { Carro } from "./Carro";
import { ContaBancaria } from "./ContaBancaria";
import { Pessoa } from "./Pessoa";

 

const carro1 = new Carro('Chevrolet', 'Prisma', 2008)

carro1.exibirInfos()

const contaBancaria = new ContaBancaria(10)
console.log(contaBancaria.valor)
contaBancaria.valor = 20
console.log(contaBancaria.valor)


class Exemplo {
  constructor(
    public variavelPublica: string, 
    private variavelPrivada: number
  ) {}

  mostrarDetalhes() {
    console.log(`Variavél Publica: ${this.variavelPublica}`);
    console.log(`Variavél Privada: ${this.variavelPrivada}`);
    
  }
}


const instancia = new Exemplo('ola', 2)
console.log(instancia.variavelPublica);
// console.log(instancia.variavelPrivada);

instancia.mostrarDetalhes()

class Pessoa2 {
  constructor(private _idade: number) {}

  public get idade(): number {
    return this.idade
  }

  public set idade(idade: number) {
    this._idade = idade
  }
}

const pessoa3 = new Pessoa2(30)



class Animal2 {
  constructor(protected _name: string, protected _tipo: string) {}

  emitirSom() {
    console.log('Emitindo som genérico do animal.')
  }

  get name(): string {
    return this._name 
  }

  set name(name: string) {
    this._name = name
  }
 
  get tipo(): string {
    return this._tipo
  }

  set tipo(tipo: string) {
    this._tipo = tipo
  }
}

class Cachorro2 extends Animal2 {
  constructor(nome: string, private _raca: string) {
    super(nome, 'Cachorro')
  }

  get raca(): string {
    return this._raca
  }

  
  set raca(raca : string) {
    this._raca = raca;
  }
  
}

class Galinha extends Animal2 {
  constructor(nome: string, private _corPena: string) {
    super(nome, 'Galinha')
  }

  cacarejar() {
    console.log('cocoricó');
  }

  
  public get corPena() : string {
    return this._corPena
  }

  
  public set corPena(corPena : string) {
    this._corPena = corPena;
  }
  
  

}

const cachorro = new Cachorro2('Bili', 'Poodle')
console.log(cachorro.name);


import {Animal, Cachorro, Gato} from './AnimalNovo'

const animal1: Animal = new Cachorro('Totó')
const animal2: Animal = new Gato('Mimo')

animal1.produzirSom()
animal2.produzirSom()