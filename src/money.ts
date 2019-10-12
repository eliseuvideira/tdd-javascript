import Expression from './expression';
import Bank from './bank';

class Sum implements Expression {
  public augend: Money;
  public addend: Money;

  constructor(augend: Money, addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }

  public reduce(bank: Bank, to: string): Money {
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}

export { Sum };

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

  public plus(addend: Money): Sum {
    return new Sum(this, addend);
  }
}

export default Money;
