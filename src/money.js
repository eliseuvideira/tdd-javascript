class Money {
  equals(money) {
    return (
      money.amount === this.amount && money.constructor === this.constructor
    );
  }
}

export default Money;
