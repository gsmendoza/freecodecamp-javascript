/* global Cash */

class CashRegister {
  constructor({ cashBreakdown }) {
    this.cash = new Cash(cashBreakdown);
  }

  withdraw(amount) {
    return this.cash.deduct(amount);
  }
}
