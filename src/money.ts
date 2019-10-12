class Money {
  public static dollar(amount) {
    return new Money(amount, 'USD');
  }

  public static franc(amount) {
    return new Money(amount, 'CHF');
  }

  private amount: number;
  private currency: string;

  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  public equals(money) {
    return (
      money.amount === this.amount && money.getCurrency() === this.currency
    );
  }

  public getCurrency() {
    return this.currency;
  }

  public times(multiplier) {
    return new Money(this.amount * multiplier, this.currency);
  }
}

export default Money;
