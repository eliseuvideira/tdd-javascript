import Money from './money';
import Bank from './bank';

interface Expression {
  reduce(bank: Bank, to: string): Money;
  plus(added: Expression): Expression;
  equals(expression: Expression): boolean;
  times(multiplier: number): Expression;
}

export default Expression;
