import Expression from './expression';
import Money from './money';
import Bank from './bank';

class Sum implements Expression {
  public augend: Expression;
  public addend: Expression;

  constructor(augend: Expression, addend: Expression) {
    this.augend = augend;
    this.addend = addend;
  }

  public plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }

  public times(multiplier: number): Expression {
    return new Sum(
      this.augend.times(multiplier),
      this.addend.times(multiplier),
    );
  }

  public reduce(bank: Bank, to: string): Money {
    const amount =
      this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;
    return new Money(amount, to);
  }

  public equals(expression: Expression): boolean {
    return expression === this;
  }
}

export default Sum;
