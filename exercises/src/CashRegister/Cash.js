/* global Denomination, DenominationCount */

class Cash {
  constructor(cashBreakdown) {
    this.cashBreakdown = cashBreakdown;
  }

  get amount() {
    const prelimAmount = this.cashBreakdown.reduce((sum, item) => sum + item[1], 0);

    const roundedAmount = Math.ceil(prelimAmount * 100) / 100;

    return roundedAmount;
  }

  add(other) {
    const result = [...this.cashBreakdown];

    other.cashBreakdown.forEach((otherCashBreakdownItem) => {
      const matchingCashBreakdownItem = result.find(
        (cashBreakdownItem) => cashBreakdownItem[0] === otherCashBreakdownItem[0],
      );

      if (matchingCashBreakdownItem) {
        matchingCashBreakdownItem[1] += otherCashBreakdownItem[1];
      } else {
        result.push([...otherCashBreakdownItem]);
      }
    });

    return new Cash(result);
  }

  deduct(amount) {
    let result = new Cash([]);
    let remainder = amount;

    this.denominationCounts.reverse().forEach((denominationCount) => {
      const subsumedDenominationCount = denominationCount.subsume(remainder);
      const subsumedCash = new Cash([subsumedDenominationCount.asCashBreakdownItem]);

      result = result.add(subsumedCash);
      remainder = Math.ceil((amount - result.amount) * 100) / 100;
    });

    if (result.amount === amount) {
      return result.normalize;
    }

    return new Cash([]);
  }

  get denominationCounts() {
    if (this.memoizedDenominationCounts) {
      return this.memoizedDenominationCounts;
    }

    this.memoizedDenominationCounts = this.cashBreakdown.map((cashBreakdownItem) => {
      const denomination = Denomination.find(cashBreakdownItem[0]);
      const units = cashBreakdownItem[1] / denomination.value;

      return new DenominationCount({ denomination, units });
    });

    return this.memoizedDenominationCounts;
  }

  get normalize() {
    const nonZeroDenominationCounts = this.denominationCounts.filter(
      (denominationCount) => denominationCount.units > 0,
    );

    const sortedDenominationCounts = nonZeroDenominationCounts.sort(
      (a, b) => b.denomination.value - a.denomination.value,
    );

    return new Cash(sortedDenominationCounts.map(
      (denominationCount) => denominationCount.asCashBreakdownItem,
    ));
  }
}
