import Subtraction from './Subtraction'

describe('Subtraction class tests', () => {
  test('Subtraction toString', () => {
    // Random numbers from 1 to 100 for left and right variables
    const left        = Math.floor(Math.random() * 100) + 1;
    const right       = Math.floor(Math.random() * 100) + 1;
    const subtraction = new Subtraction(left, right)

    const actual   = subtraction.toString()
    const expected = `(${left} - ${right})`

    expect(actual).toStrictEqual(expected)
  })

  describe('Subtraction operations', () => {
    const leftPositive  = 58
    const leftNegative  = -62
    const rightPositive = 20
    const rightNegative = -45

    test('Subtraction result both positive', () => {
      const subtraction = new Subtraction(leftPositive, rightPositive)

      const actual   = subtraction.result()
      const expected = leftPositive - rightPositive

      expect(actual).toStrictEqual(expected)
    })

    test('Subtraction result left negative', () => {
      const subtraction = new Subtraction(leftNegative, rightPositive)

      const actual   = subtraction.result()
      const expected = leftNegative - rightPositive

      expect(actual).toStrictEqual(expected)
    })

    test('Subtraction result right negative', () => {
      const subtraction = new Subtraction(leftPositive, rightNegative)

      const actual   = subtraction.result()
      const expected = leftPositive - rightNegative

      expect(actual).toStrictEqual(expected)
    })

    test('Subtraction result both negative', () => {
      const subtraction = new Subtraction(leftNegative, rightNegative)

      const actual   = subtraction.result()
      const expected = leftNegative - rightNegative

      expect(actual).toStrictEqual(expected)
    })

    test('Subtraction result left zero right positive', () => {
      const subtraction = new Subtraction(0, rightPositive)

      const actual   = subtraction.result()
      const expected = 0 - rightPositive

      expect(actual).toStrictEqual(expected)
    })

    test('Subtraction result left zero right negative', () => {
      const subtraction = new Subtraction(0, rightNegative)

      const actual   = subtraction.result()
      const expected = 0 - rightNegative

      expect(actual).toStrictEqual(expected)
    })

    test('Subtraction result right zero right positive', () => {
      const subtraction = new Subtraction(leftPositive, 0)

      const actual   = subtraction.result()
      const expected = leftPositive

      expect(actual).toStrictEqual(expected)
    })

    test('Subtraction result right zero right negative', () => {
      const subtraction = new Subtraction(leftNegative, 0)

      const actual   = subtraction.result()
      const expected = leftNegative

      expect(actual).toStrictEqual(expected)
    })

    test('Subtraction result zero both', () => {
      const subtraction = new Subtraction(0, 0)

      const actual   = subtraction.result()
      const expected = 0

      expect(actual).toStrictEqual(expected)
    })
  })

})