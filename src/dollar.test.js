import Dollar from './dollar';

describe('dollar', () => {
  it('should multiply dollars', () => {
    expect.assertions(2);
    const five = new Dollar(5);
    let product = five.times(2);
    expect(product.amount).toBe(10);
    product = five.times(3);
    expect(product.amount).toBe(15);
  });
});
