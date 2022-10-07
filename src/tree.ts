import {OPERATION_CLASS} from "./classes/Operation";

export const Node = (operator: string, value: number | null, left: any, right: any) => {
  const result = function () {
    console.log(1, OPERATION_CLASS, operator, OPERATION_CLASS?.[operator])

    if (!OPERATION_CLASS?.[operator]) {
      return value
    }

    const operation = new OPERATION_CLASS[operator](left, right)
    console.log(1, operation.result())
    return new OPERATION_CLASS[operator](left, right).result()
  };

  const toString = function () {
    switch (operator) {
      case "+":
        return `(${left.toString()} + ${right.toString()})`;
      case "-":
        return `(${left.toString()} - ${right.toString()})`;
      case "x":
        return `(${left.toString()} x ${right.toString()})`;
      case "÷":
        return `(${left.toString()} ÷ ${right.toString()})`;
      default:
        return value.toString();
    }
  };

  return {
    operator,
    value,
    left,
    right,
    result,
    toString
  };
};