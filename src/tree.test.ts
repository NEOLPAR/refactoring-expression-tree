import {strictEqual} from 'assert';
import {Node}        from './tree'

describe('Node function', () => {
  let tree;
  beforeEach(() => {
    tree = Node(
      "÷",
      null,
      Node(
        "+",
        null,
        Node("", 7, null, null),
        Node(
          "x",
          null,
          Node("-", null, Node("", 3, null, null), Node("", 2, null, null)),
          Node("", 5, null, null)
        )
      ),
      Node("", 6, null, null)
    );
  })

  test('toString initial test', () => {
    const actual   = tree.toString()
    const expected = "((7 + ((3 - 2) x 5)) ÷ 6)"

    expect(actual).toStrictEqual(expected)
  })

  test('result initial test', () => {
    const actual   = tree.result()
    const expected = 2

    expect(actual).toStrictEqual(expected)
  })
})