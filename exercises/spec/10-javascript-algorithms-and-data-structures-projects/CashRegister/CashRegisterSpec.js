/* global CashRegister */

describe('JavaScript Algorithms and Data Structures Projects: Cash Register', () => {
  describe('CashRegister', () => {
    describe('withdraw(amount)', () => {
      it('deducts amount from the cash of the register', () => {
        const cashBreakdown = [['ONE', 3]];
        const cashRegister = new CashRegister({ cashBreakdown });

        const amount = 2;

        const result = cashRegister.withdraw(amount);

        expect(result.denominationCounts.length).toEqual(1);
        expect(result.denominationCounts[0].denomination.name).toEqual('ONE');
        expect(result.denominationCounts[0].units).toEqual(2);
      });
    });
  });
});
