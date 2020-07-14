class DenominationCount {
  constructor({ denomination, units }) {
    this.denomination = denomination;
    this.units = units;
  }

  subsume(amount) {
    const subsumedUnits = Math.min(Math.floor(amount / this.denomination.value), this.units);

    return new DenominationCount({
      denomination: this.denomination, units: subsumedUnits,
    });
  }

  get asCashBreakdownItem() {
    return [
      this.denomination.name,
      this.denomination.value * this.units,
    ];
  }
}
