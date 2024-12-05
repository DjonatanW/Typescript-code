import { Carro } from "./Carro";
import { ContaBancaria } from "./ContaBancaria";
import { Pessoa } from "./Pessoa";

const pessoa = new Pessoa('Djonatan', 28)
pessoa.mostrarDetalhes()
console.log(pessoa.retornarIdadeEmDias())
 
// **3.** Crie uma classe **`Carro`** com um construtor que aceite **`marca`** e **`modelo`** como parâmetros. Adicione uma propriedade **`ano`** ao construtor com um valor padrão. Crie uma instância do **`Carro`** sem passar o ano, e outra passando o ano.

const carro = new Carro('Chevrolet', 'Prisma')
const carro1 = new Carro('Chevrolet', 'Prisma', 2008)

console.log(carro);
console.log(carro1);

// **4.** Modifique a classe **`Carro`** para tornar as propriedades **`marca`** e **`modelo`** obrigatórias no construtor. Tente criar uma instância sem passar essas propriedades e observe o erro.
// const carro2 = new Carro()

// **5.** Adicione uma propriedade opcional **`cor`** à classe **`Carro`**. Crie instâncias do **`Carro`** com e sem a propriedade **`cor`**.
const carro2 = new Carro('Chevrolet', 'Prisma', undefined,'Vermelho')
const carro3 = new Carro('Chevrolet', 'Prisma')
console.log(carro2);
console.log(carro3);
// ## Desafio

// **6.** Crie uma classe **`ContaBancaria`** com propriedades **`titular`**, **`saldo`** e um método **`sacar`** que reduza o saldo. Adicione um construtor que aceite o titular e um saldo inicial (com um saldo padrão de 0). Crie uma instância da **`ContaBancaria`**, realize alguns saques e exiba o saldo final.
const contaBancaria = new ContaBancaria('Djonatan', 1000)
contaBancaria.mostrarSaldo()
contaBancaria.sacar(10)
contaBancaria.mostrarSaldo()
contaBancaria.sacar(80)
contaBancaria.mostrarSaldo()
contaBancaria.sacar(40)
contaBancaria.mostrarSaldo()
contaBancaria.sacar(50)
contaBancaria.mostrarSaldo()
