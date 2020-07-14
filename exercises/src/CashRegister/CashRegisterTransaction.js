class CashRegisterTransaction {
  constructor({ cashRegister, price, cashAmount }) {
    this.cashRegister = cashRegister;
    this.price = price;
    this.cashAmount = cashAmount;
  }

  get status() {
    if (this.resultingChangeCash.amount === this.cashRegister.cash.amount) {
      return 'CLOSED';
    }

    if (this.resultingChangeCash.amount === this.expectedChangeCashAmount) {
      return 'OPEN';
    }

    return 'INSUFFICIENT_FUNDS';
  }

  get changeBreakdown() {
    if (this.resultingChangeCash.amount === this.cashRegister.cash.amount) {
      return this.cashRegister.cash.cashBreakdown;
    }

    return this.resultingChangeCash.cashBreakdown;
  }

  get resultingChangeCash() {
    if (this.memoizedResultingChangeCash) { return this.memoizedResultingChangeCash; }

    this.memoizedResultingChangeCash = this.cashRegister.withdraw(this.expectedChangeCashAmount);

    return this.memoizedResultingChangeCash;
  }

  get expectedChangeCashAmount() {
    return this.cashAmount - this.price;
  }
}
