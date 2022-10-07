import {OPERATION_CLASS} from "./classes/Operation";

export const Node = (operator: string, value: number | null, left = null, right = null) => {
  const result = function () {
    if (!OPERATION_CLASS?.[operator]) {
      return value
    }

    return new OPERATION_CLASS[operator](left.result(), right.result()).result()
  };
  const toString = function () {
    if (!OPERATION_CLASS?.[operator]) {
      return value
    }

    return new OPERATION_CLASS[operator](left.toString(), right.toString()).toString()
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