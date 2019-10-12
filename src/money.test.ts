import Money from './money';

describe('money', () => {
  it('should test equality', () => {
    expect.assertions(3);
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(3))).toBe(false);
    expect(Money.dollar(3).equals(Money.franc(20))).toBe(false);
  });

  it('should multiply', () => {
    expect.assertions(2);
    const five = Money.dollar(5);
    expect(five.times(2).equals(Money.dollar(10))).toBe(true);
    expect(five.times(3).equals(Money.dollar(15))).toBe(true);
  });

  it('should implement currency', () => {
    expect.assertions(2);
    expect(Money.dollar(1).getCurrency()).toBe('USD');
    expect(Money.franc(2).getCurrency()).toBe('CHF');
  });
});
