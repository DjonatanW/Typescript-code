import { randomUUID } from "crypto"
import { User } from "./User"
import { comments } from "../database/comment"
import { Comment } from "../models/Comment"
import { ProductType } from "../Types"
import { Rating } from "./Rating"

export class Product {
  private readonly _id: string = randomUUID()
  private _ratings:Rating[] = []

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
    this.showRatings()
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

  addRate(rate: number, user: User) {
    if (rate < 0 || rate > 5) {
      console.log('Sua avaliação deve ser entre 0 e 5.')
      return 
    }

    const rating = new Rating(rate, user)
    this._ratings.push(rating)
    console.log(`Avaliação de ${rate} adicionada por ${user.userName}`);
  }

  public showRatings(): void {
    
    this._ratings.forEach((rating) => {
        console.log(`Avaliação: ${rating.rate} por ${rating.user.userName}`);
    });
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

