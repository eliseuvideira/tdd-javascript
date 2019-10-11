class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  equals(money) {
    return (
      money.amount === this.amount && money.constructor === this.constructor
    );
  }

  static dollar(amount) {
    return new Dollar(amount, 'USD');
  }

  static franc(amount) {
    return new Franc(amount, 'CHF');
  }

  getCurrency() {
    return this.currency;
  }
}

class Dollar extends Money {
  constructor(amount, currency) {
    super(amount, currency);
  }

  times(multiplier) {
    return Money.dollar(this.amount * multiplier);
  }
}

class Franc extends Money {
  constructor(amount, currency) {
    super(amount, currency);
  }

  times(multiplier) {
    return Money.franc(this.amount * multiplier);
  }
}

export { Dollar, Franc, Money };
