import {Node} from './tree'

describe('Node function', () => {
  let tree;
  beforeEach(() => {
    tree = Node(
      "÷",
      null,
      Node(
        "+",
        null,
        Node("", 7),
        Node(
          "x",
          null,
          Node("-", null, Node("", 3), Node("", 2)),
          Node("", 5)
        )
      ),
      Node("", 6)
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