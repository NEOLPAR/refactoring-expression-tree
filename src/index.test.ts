import * as Index from './index'

describe('Tree exists', () => {
  test('Tree is exported from index', () => {
    const actual = Index.Tree

    expect(actual).toBeDefined()
  })
})