class Money {
  equals(money) {
    return (
      money.amount === this.amount && money.constructor === this.constructor
    );
  }
}

class Dollar extends Money {
  constructor(amount) {
    super();
    this.amount = amount;
  }

  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }
}

class Franc extends Money {
  constructor(amount) {
    super();
    this.amount = amount;
  }

  times(multiplier) {
    return new Franc(this.amount * multiplier);
  }
}

export { Dollar, Franc, Money };
