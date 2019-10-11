import Dollar from './dollar';

describe('dollar', () => {
  it('should multiply dollars', () => {
    expect.assertions(1);
    const five = new Dollar(5);
    five.times(2);
    expect(five.amount).toBe(10);
  });
});
