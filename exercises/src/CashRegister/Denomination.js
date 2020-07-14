class Denomination {
  static ALL() {
    if (this.all) { return this.all; }

    this.all = {
      PENNY: new Denomination({ name: 'PENNY', value: 0.01 }),
      NICKEL: new Denomination({ name: 'NICKEL', value: 0.05 }),
      DIME: new Denomination({ name: 'DIME', value: 0.1 }),
      QUARTER: new Denomination({ name: 'QUARTER', value: 0.25 }),
      ONE: new Denomination({ name: 'ONE', value: 1 }),
      FIVE: new Denomination({ name: 'FIVE', value: 5 }),
      TEN: new Denomination({ name: 'TEN', value: 10 }),
      TWENTY: new Denomination({ name: 'TWENTY', value: 20 }),
      'ONE HUNDRED': new Denomination({ name: 'ONE HUNDRED', value: 100 }),
    };

    return this.all;
  }

  static find(name) {
    return this.ALL()[name];
  }

  constructor({ name, value }) {
    this.name = name;
    this.value = value;
  }

  get cents() {
    return this.value * 100;
  }
}
