class Franc {
  constructor(amount) {
    this.amount = amount;
  }

  times(multiplier) {
    return new Franc(this.amount * multiplier);
  }

  equals(dollar) {
    return dollar.amount === this.amount;
  }
}

export default Franc;
