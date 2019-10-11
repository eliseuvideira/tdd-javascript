import { Money } from './money';

describe('dollar', () => {
  it('should multiply dollars', () => {
    expect.assertions(2);
    const five = Money.dollar(5);
    expect(five.times(2).equals(Money.dollar(10))).toBe(true);
    expect(five.times(3).equals(Money.dollar(15))).toBe(true);
  });

  it('should compare equality of dollars', () => {
    expect.assertions(3);
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(Money.dollar(5).equals(Money.franc(5))).toBe(false);
  });
});

describe('franc', () => {
  it('should multiply francs', () => {
    expect.assertions(2);
    const five = Money.franc(5);
    expect(five.times(2).equals(Money.franc(10))).toBe(true);
    expect(five.times(3).equals(Money.franc(15))).toBe(true);
  });

  it('should compare equality of francs', () => {
    expect.assertions(2);
    expect(Money.franc(5).equals(Money.franc(5))).toBe(true);
    expect(Money.franc(5).equals(Money.franc(6))).toBe(false);
  });
});
