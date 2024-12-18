import { randomUUID } from 'crypto'
import { User } from './User'

export class Rating {
  private readonly _id: string = randomUUID()

  constructor(
    private _rate: number,
    private _user: User
  ) {}

  public get id(): string {
    return this._id
  }

  public get rate(): number {
    return this._rate
  }

  public get user(): User {
    return this._user
  }

  


}