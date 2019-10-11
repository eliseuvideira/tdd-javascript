class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  equals(money) {
    return (
      money.amount === this.amount && money.getCurrency() === this.currency
    );
  }

  static dollar(amount) {
    return new Money(amount, 'USD');
  }

  static franc(amount) {
    return new Money(amount, 'CHF');
  }

  getCurrency() {
    return this.currency;
  }

  times(multiplier) {
    return new Money(this.amount * multiplier, this.currency);
  }
}

export default Money;
