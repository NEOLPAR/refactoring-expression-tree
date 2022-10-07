import Operation from './Operation'

export default class Sum extends Operation {
  constructor(left: number, right: number) {
    super('+', left, right);
  }

  public result(): number {
    return this.left + this.right;
  }
}