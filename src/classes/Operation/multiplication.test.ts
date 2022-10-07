import Multiplication from './Multiplication'

describe('Multiplication class tests', () => {
  test('Multiplication toString', () => {
    // Random numbers from 1 to 100 for left and right variables
    const left           = Math.floor(Math.random() * 100) + 1;
    const right          = Math.floor(Math.random() * 100) + 1;
    const multiplication = new Multiplication(left, right)

    const actual   = multiplication.toString()
    const expected = `(${left} x ${right})`

    expect(actual).toStrictEqual(expected)
  })

  describe('Multiplication operations', () => {
    const leftPositive  = 58
    const leftNegative  = -62
    const rightPositive = 20
    const rightNegative = -45

    test('Multiplication result both positive', () => {
      const multiplication = new Multiplication(leftPositive, rightPositive)

      const actual   = multiplication.result()
      const expected = leftPositive * rightPositive

      expect(actual).toStrictEqual(expected)
    })

    test('Multiplication result left negative', () => {
      const multiplication = new Multiplication(leftNegative, rightPositive)

      const actual   = multiplication.result()
      const expected = leftNegative * rightPositive

      expect(actual).toStrictEqual(expected)
    })

    test('Multiplication result right negative', () => {
      const multiplication = new Multiplication(leftPositive, rightNegative)

      const actual   = multiplication.result()
      const expected = leftPositive * rightNegative

      expect(actual).toStrictEqual(expected)
    })

    test('Multiplication result both negative', () => {
      const multiplication = new Multiplication(leftNegative, rightNegative)

      const actual   = multiplication.result()
      const expected = leftNegative * rightNegative

      expect(actual).toStrictEqual(expected)
    })

    test('Multiplication result left zero right positive', () => {
      const multiplication = new Multiplication(0, rightPositive)

      const actual   = multiplication.result()
      const expected = 0

      expect(actual).toStrictEqual(expected)
    })

    test('Multiplication result left zero right negative', () => {
      const multiplication = new Multiplication(0, rightNegative)

      const actual   = multiplication.result()
      const expected = 0

      expect(actual).toStrictEqual(expected)
    })

    test('Multiplication result right zero right positive', () => {
      const multiplication = new Multiplication(leftPositive, 0)

      const actual   = multiplication.result()
      const expected = 0

      expect(actual).toStrictEqual(expected)
    })

    test('Multiplication result right zero right negative', () => {
      const multiplication = new Multiplication(leftNegative, 0)

      const actual   = multiplication.result()
      const expected = 0

      expect(actual).toStrictEqual(expected)
    })

    test('Multiplication result zero both', () => {
      const multiplication = new Multiplication(0, 0)

      const actual   = multiplication.result()
      const expected = 0

      expect(actual).toStrictEqual(expected)
    })
  })

})