import Division from './Division'

describe('Division class tests', () => {
  test('Division toString', () => {
    // Random numbers from 1 to 100 for left and right variables
    const left           = Math.floor(Math.random() * 100) + 1;
    const right          = Math.floor(Math.random() * 100) + 1;
    const division = new Division(left, right)

    const actual   = division.toString()
    const expected = `(${left} ÷ ${right})`

    expect(actual).toStrictEqual(expected)
  })

  describe('Division operations', () => {
    const leftPositive  = 58
    const leftNegative  = -62
    const rightPositive = 20
    const rightNegative = -45

    test('Division result both positive', () => {
      const division = new Division(leftPositive, rightPositive)

      const actual   = division.result()
      const expected = leftPositive / rightPositive

      expect(actual).toStrictEqual(expected)
    })

    test('Division result left negative', () => {
      const division = new Division(leftNegative, rightPositive)

      const actual   = division.result()
      const expected = leftNegative / rightPositive

      expect(actual).toStrictEqual(expected)
    })

    test('Division result right negative', () => {
      const division = new Division(leftPositive, rightNegative)

      const actual   = division.result()
      const expected = leftPositive / rightNegative

      expect(actual).toStrictEqual(expected)
    })

    test('Division result both negative', () => {
      const division = new Division(leftNegative, rightNegative)

      const actual   = division.result()
      const expected = leftNegative / rightNegative

      expect(actual).toStrictEqual(expected)
    })

    test('Division result left zero right positive', () => {
      const division = new Division(0, rightPositive)

      const actual   = division.result()
      const expected = 0

      expect(actual).toStrictEqual(expected)
    })

    test('Division result left zero right negative', () => {
      const division = new Division(0, rightNegative)

      const actual   = division.result()
      const expected = 0

      expect(actual).toStrictEqual(expected)
    })

    test('Division result right zero right positive', () => {
      const division = new Division(leftPositive, 0)

      const actual   = division.result()
      const expected = 0

      expect(actual).toStrictEqual(expected)
    })

    test('Division result right zero right negative', () => {
      const division = new Division(leftNegative, 0)

      const actual   = division.result()
      const expected = 0

      expect(actual).toStrictEqual(expected)
    })

    test('Division result zero both', () => {
      const division = new Division(0, 0)

      const actual   = division.result()
      const expected = 0

      expect(actual).toStrictEqual(expected)
    })
  })

})