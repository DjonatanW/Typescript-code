import { randomUUID } from "crypto";
import { Product } from "./Product";
import { User } from "./User";

export class Comment {
  private _id: string = randomUUID()
  constructor(
    private _content: string,
    private _from: User,
    private _product: Product
  ) {}

  public get content(): string {
    return this._content
  }

  public get from(): User {
    return this._from
  }

  
  public get product() : Product {
    return this._product
  }

  public show() {
    console.log(`Comentário de ${this.from.userName} :${this._content}`); 
  }

  public toJson() {
    return {
      id: this._id,
      from: this._from.toJson(),
      content: this._content,
      productId: this._product.id
    }
  }
}