export default abstract class Operation {
  protected operator: string
  protected right: number
  protected left: number


  protected constructor(operator: string, left: number, right: number) {
    this.operator = operator
    this.left     = left
    this.right    = right
  }

  public toString() {
    return `(${this.left} ${this.operator} ${this.right})`
  }

  abstract result(): number
}