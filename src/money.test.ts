import Money, { Sum } from './money';
import Bank from './bank';

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

  it('should compute simple addition', () => {
    expect.assertions(1);
    const five = Money.dollar(5);
    const sum = five.plus(five);
    const bank = new Bank();
    const reduced = bank.reduce(sum, 'USD');
    expect(Money.dollar(10).equals(reduced)).toBe(true);
  });

  it('`plus()` should return a sum', () => {
    expect.assertions(2);
    const five = Money.dollar(5);
    const result = five.plus(five);
    const sum: Sum = result as Sum;
    expect(five.equals(sum.augend)).toBe(true);
    expect(five.equals(sum.addend)).toBe(true);
  });

  it('should reduce sum', () => {
    expect.assertions(1);
    const sum = new Sum(Money.dollar(3), Money.dollar(4));
    const bank = new Bank();
    const result = bank.reduce(sum, 'USD');
    expect(Money.dollar(7).equals(result)).toBe(true);
  });

  it('should test bank.reduce()', () => {
    expect.assertions(1);
    const bank = new Bank();
    const reduced = bank.reduce(Money.dollar(1), 'USD');
    expect(Money.dollar(1).equals(reduced)).toBe(true);
  });

  it('should reduce money of different currencies', () => {
    expect.assertions(1);
    const bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const result = bank.reduce(Money.franc(2), 'USD');
    expect(Money.dollar(1).equals(result)).toBe(true);
  });

  it('should test rate of identical currencies', () => {
    expect.assertions(1);
    expect(new Bank().getRate('USD', 'USD')).toBe(1);
  });
});
