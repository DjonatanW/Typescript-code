export class Skill {
  constructor(
    private id: string,
    private _descricao: string,
    private _ativo: boolean
  ) {}

  get descricao() {
    return this._descricao
  }

  get ativo() {
    return this._ativo
  }
}