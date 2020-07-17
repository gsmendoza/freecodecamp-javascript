/* global checkCashRegister */

describe('JavaScript Algorithms and Data Structures Projects: Cash Register', () => {
  describe('checkCashRegister(price, cashAmount, cashBreakdownInDrawer)', () => {
    it('returns status with change', () => {
      const price = 3.26;
      const cashAmount = 100;

      const cashBreakdownInDrawer = [
        ['PENNY', 1.01],
        ['NICKEL', 2.05],
        ['DIME', 3.1],
        ['QUARTER', 4.25],
        ['ONE', 90],
        ['FIVE', 55],
        ['TEN', 20],
        ['TWENTY', 60],
        ['ONE HUNDRED', 100],
      ];

      const expectedChangeBreakdown = [
        ['TWENTY', 60],
        ['TEN', 20],
        ['FIVE', 15],
        ['ONE', 1],
        ['QUARTER', 0.5],
        ['DIME', 0.2],
        ['PENNY', 0.04],
      ];

      const expectedStatus = 'OPEN';

      expect(checkCashRegister(price, cashAmount, cashBreakdownInDrawer))
        .toEqual({ status: expectedStatus, change: expectedChangeBreakdown });
    });
  });
});
