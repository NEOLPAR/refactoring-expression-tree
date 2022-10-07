import Operation from './Operation'

export default class Multiplication extends Operation {
  constructor(left: number, right: number) {
    super('*', left, right);
  }

  public result(): number {
    if ( this.left === 0 || this.right === 0 ) {
      return 0
    }

    return this.left * this.right;
  }
}