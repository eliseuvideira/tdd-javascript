import Dollar from './dollar';
import Franc from './franc';

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
