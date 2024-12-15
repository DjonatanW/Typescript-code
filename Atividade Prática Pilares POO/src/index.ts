import { Cachorro } from "./Cachorro";
import { Camarote } from "./Camarote";
import { Cavalo } from "./Cavalo";
import { Gato } from "./Gato";
import { Normal } from "./Normal";
import { Novo } from "./Novo";
import { Velho } from "./Velho";
import { Vip } from "./Vip";

const ingressoNormal = new Normal(20)

ingressoNormal.imprimeValor()

const ingrssoVip = new Vip(20, 2)

ingrssoVip.imprimeValor()

const ingrssoCamarote = new Camarote(20, 10)

ingrssoCamarote.imprimeValor()

const imovelNovo = new Novo('av todos',240000, 20000)
imovelNovo.mostrarAdicional()

const imovelVelho = new Velho('av algum lugar',240000, 40000)
imovelVelho.mostrarDesconto()


const gato = new Gato('Pérola', 'Munchkin') 
gato.somAnimal()

const cavalo = new Cavalo('Teodoro', 'Narchador')
cavalo.somAnimal()

const cachorro = new Cachorro('Liso', 'Salsicha')
cachorro.somAnimal()