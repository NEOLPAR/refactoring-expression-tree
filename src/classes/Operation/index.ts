import Sum            from "./Sum";
import Multiplication from "./Multiplication";
import Division       from "./Division";
import Subtraction    from "./Subtraction";

export * from './Operation'

export const OPERATION_CLASS = {
  '+': Sum,
  '-': Subtraction,
  'x': Multiplication,
  '÷': Division,
}