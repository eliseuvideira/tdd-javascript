import Expression from './expression';

class Money implements Expression {
  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }

  private amount: number;
  private currency: string;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  public equals(money: Money): boolean {
    return (
      money.amount === this.amount && money.getCurrency() === this.currency
    );
  }

  public getCurrency(): string {
    return this.currency;
  }

  public times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  public plus(addend: Money): Expression {
    return new Money(this.amount + addend.amount, this.currency);
  }
}

export default Money;
