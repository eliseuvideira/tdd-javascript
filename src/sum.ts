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

  public plus(addend: Expression) {
    return null;
  }

  public reduce(bank: Bank, to: string): Money {
    const amount =
      this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;
    return new Money(amount, to);
  }

  public equals(expression: Expression): boolean {
    return false;
  }
}

export default Sum;
