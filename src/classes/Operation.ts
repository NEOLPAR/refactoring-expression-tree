export default abstract class Operation {
  protected operator: string

  protected constructor(operator: string) {
    this.operator = operator
  }

  public toString() {
    return "hello world"
  }
}