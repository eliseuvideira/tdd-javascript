import Expression from './expression';
import Money from './money';

class Pair {
  private from: string;
  private to: string;

  constructor(from: string, to: string) {
    this.from = from;
    this.to = to;
  }

  public equals(object: Object): boolean {
    const pair = object as Pair;
    return pair.from === this.from && pair.to === this.to;
  }

  public hashCode(): number {
    return 0;
  }
}

class Bank {
  private rates: Map<Pair, number> = new Map();

  public reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  public getRate(from: string, to: string) {
    if (from === to) {
      return 1;
    }
    const [, rate] = Array.from(this.rates.entries()).find(([pair]) =>
      pair.equals(new Pair(from, to)),
    );
    return rate;
  }

  addRate(from: string, to: string, rate: number): void {
    this.rates.set(new Pair(from, to), rate);
  }
}

export default Bank;
