import * as Tree from './tree'

const tree = Tree.Node(
  "÷",
  null,
  Tree.Node(
    "+",
    null,
    Tree.Node("", 7, null, null),
    Tree.Node(
      "x",
      null,
      Tree.Node("-", null,
        Tree.Node("", 3, null, null),
        Tree.Node("", 2, null, null)
      ),
      Tree.Node("", 5, null, null)
    )
  ),
  Tree.Node("", 6, null, null)
);

console.log("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
console.log(2, tree.result());

export {
  Tree
}