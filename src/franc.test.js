import Franc from './franc';

describe('franc', () => {
  it('should multiply francs', () => {
    expect.assertions(2);
    const five = new Franc(5);
    expect(five.times(2).equals(new Franc(10))).toBe(true);
    expect(five.times(3).equals(new Franc(15))).toBe(true);
  });
});
