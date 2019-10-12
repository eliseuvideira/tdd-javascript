import Expression from './expression';
import Bank from './bank';
import Sum from './sum';

class Money implements Expression {
  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }

  public amount: number;
  public currency: string;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  public reduce(bank: Bank, to: string) {
    const rate = bank.getRate(this.currency, to);
    return new Money(this.amount / rate, to);
  }

  public equals(money: Expression): boolean {
    return (
      (money as Money).amount === this.amount &&
      (money as Money).getCurrency() === this.currency
    );
  }

  public getCurrency(): string {
    return this.currency;
  }

  public times(multiplier: number): Expression {
    return new Money(this.amount * multiplier, this.currency);
  }

  public plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }
}

export default Money;
