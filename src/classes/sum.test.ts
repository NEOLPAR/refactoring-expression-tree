import Sum from './Sum'

describe('Sum class tests', () => {
  test('Sum toString', () => {
    // Random numbers from 1 to 100 for left and right variables
    const left  = Math.floor(Math.random() * 100) + 1;
    const right = Math.floor(Math.random() * 100) + 1;
    const sum   = new Sum(left, right)

    const actual   = sum.toString()
    const expected = `(${left} + ${right})`

    expect(actual).toStrictEqual(expected)
  })

  describe('Sum operations', () => {
    const leftPositive  = 58
    const leftNegative  = -62
    const rightPositive = 20
    const rightNegative = -45

    test('Sum result both positive', () => {
      const sum   = new Sum(leftPositive, rightPositive)

      const actual   = sum.result()
      const expected = leftPositive + rightPositive

      expect(actual).toStrictEqual(expected)
    })

    test('Sum result left negative', () => {
      const sum   = new Sum(leftNegative, rightPositive)

      const actual   = sum.result()
      const expected = leftNegative + rightPositive

      expect(actual).toStrictEqual(expected)
    })

    test('Sum result right negative', () => {
      const sum   = new Sum(leftPositive, rightNegative)

      const actual   = sum.result()
      const expected = leftPositive + rightNegative

      expect(actual).toStrictEqual(expected)
    })

    test('Sum result both negative', () => {
      const sum   = new Sum(leftNegative, rightNegative)

      const actual   = sum.result()
      const expected = leftNegative + rightNegative

      expect(actual).toStrictEqual(expected)
    })

    test('Sum result left zero right positive', () => {
      const sum   = new Sum(0, rightPositive)

      const actual   = sum.result()
      const expected = rightPositive

      expect(actual).toStrictEqual(expected)
    })

    test('Sum result left zero right negative', () => {
      const sum   = new Sum(0, rightNegative)

      const actual   = sum.result()
      const expected = rightNegative

      expect(actual).toStrictEqual(expected)
    })

    test('Sum result right zero right positive', () => {
      const sum   = new Sum(leftPositive, 0)

      const actual   = sum.result()
      const expected = leftPositive

      expect(actual).toStrictEqual(expected)
    })

    test('Sum result right zero right negative', () => {
      const sum   = new Sum(leftNegative, 0)

      const actual   = sum.result()
      const expected = leftNegative

      expect(actual).toStrictEqual(expected)
    })

    test('Sum result zero both', () => {
      const sum   = new Sum(0, 0)

      const actual   = sum.result()
      const expected = 0

      expect(actual).toStrictEqual(expected)
    })
  })

})