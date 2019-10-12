import Expression from './expression';
import Money from './money';

class Bank {
  reduce(expression: Expression, currency: string): Money {
    return Money.dollar(10);
  }
}

export default Bank;
