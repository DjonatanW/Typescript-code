import { randomUUID } from "crypto"
import { User } from "./User"
import { comments } from "../database/comment"
import { Comment } from "../models/Comment"
import { ProductType } from "../Types"

export class Product {
  private _id: string = randomUUID()

  constructor(
  private _name: string,
  private _value: number,
  private _type: ProductType
  ) {}

  get id(): string {
    return this._id
  }

  get name(): string {
    return this._name 
  }

  get value(): number {
    return this._value 
  }

  get type(): string {
    return this._type 
  }

  public show(): string {
    console.log(`${this._name} (R$ ${this._value.toFixed(2)})`);
    this.showComments();
    return "\n---------------------\n";
  }

  public showComments(): void {
    const productComments = comments.filter((comment) => comment.product === this);
    productComments.forEach((comment) => {
        console.log(`  [${comment.from.userName}]: ${comment.content}`);
    });
  }

  addComment(content: string, user: User) {
    const commment = new Comment(content, user, this)
    comments.push(commment)
    console.log(`Comentário adicionado com sucesso!`); 
  }

  toJson() {
    return { 
      id: this._id,
      name: this._name,
      price: this._value,
      category: this._type
    }
  }
}

