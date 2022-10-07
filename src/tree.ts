import {OPERATION_CLASS} from "./classes/Operation";

export const Node = (operator: string, value: number | null, left: any, right: any) => {
  const result = function () {
    if (!OPERATION_CLASS?.[operator]) {
      return value
    }

    return new OPERATION_CLASS[operator](left.result(), right.result()).result()
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