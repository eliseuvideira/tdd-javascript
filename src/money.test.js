import { Dollar, Franc } from './money';

describe('dollar', () => {
  it('should multiply dollars', () => {
    expect.assertions(2);
    const five = new Dollar(5);
    expect(five.times(2).equals(new Dollar(10))).toBe(true);
    expect(five.times(3).equals(new Dollar(15))).toBe(true);
  });

  it('should compare equality of dollars', () => {
    expect.assertions(3);
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
    expect(new Dollar(5).equals(new Franc(5))).toBe(false);
  });
});

describe('franc', () => {
  it('should multiply francs', () => {
    expect.assertions(2);
    const five = new Franc(5);
    expect(five.times(2).equals(new Franc(10))).toBe(true);
    expect(five.times(3).equals(new Franc(15))).toBe(true);
  });

  it('should compare equality of francs', () => {
    expect.assertions(2);
    expect(new Franc(5).equals(new Franc(5))).toBe(true);
    expect(new Franc(5).equals(new Franc(6))).toBe(false);
  });
});
