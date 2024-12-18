import { randomUUID } from "crypto"
import { Product } from "./Product"

export class User{
  private readonly _id: string = randomUUID()
  private _cart: Product[] = []

  constructor(
    private _name:string,
    private _userName: string,
    private _email: string
  ) {}

  get id():string {
    return this._id
  }

  public cart(): Product[] {
    return this._cart
  }
  get name() {
    return this._name
  }

  get userName() {
    return this._userName
  }

  get email() {
    return this._email
  }

  addToCart(product: Product) {
    this._cart.push(product)
    console.log(`Produto ${product.name} adicionado no carrinho.`);
  }

  removeFromCart(product: Product) {
    const index = this._cart.indexOf(product)
    if(index === -1) {
      console.log(`Produto ${product.name} não encontrado`);
      return 
    }
    this._cart.splice(index, 1)
    console.log(`Produto ${product.name} removido com sucesso!`);
  }

  public showProduct() {
    let total = 0
    this._cart.forEach(product => {
      console.log(product.show())
      total += product.value
    })
    console.log(`Total do carrinho é R$${total.toFixed(2)}`);
    
  }

  toJson() {
    return { 
      id: this._id,
      name: this._name,
      userName: this._userName,
      email: this.email
    }
  }
}