import { FormatoDeElemento } from "./FormatoDeElemento";
import { Item } from "./Item";
import { Pedido } from "./Pedido";

const item = new Item(1,'maçã', 'maçã')
const item2 = new Item(2,'banana', 'banana')
const item3 = new Item(3,'mamão', 'mamão')
const item4 = new Item(4,'melancia', 'melancia')
const itens = []
itens.push(item)
itens.push(item2)
itens.push(item3)
itens.push(item4)

const pedido = new Pedido(itens, 10000)
console.log(`Valor total do pedido é ${pedido.valorTotal}`)

const formato = new FormatoDeElemento()

formato.desenhar()
formato.redimensionar()