class Dollar {
  constructor(amount) {
    this.amount = amount;
  }

  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }

  equals(dollar) {
    return dollar.amount === this.amount;
  }
}

export default Dollar;
