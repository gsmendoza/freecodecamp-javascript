/* global checkCashRegister */

describe('JavaScript Algorithms and Data Structures Projects: Cash Register', () => {
  describe('checkCashRegister(price, cashAmount, cashBreakdownInDrawer)', () => {
    describe('when cash-in-drawer is equal to change due', () => {
      it('returns CLOSED with change', () => {
        const price = 19.5;
        const cashAmount = 20;

        const cashBreakdownInDrawer = [
          ['PENNY', 0.5],
          ['NICKEL', 0],
          ['DIME', 0],
          ['QUARTER', 0],
          ['ONE', 0],
          ['FIVE', 0],
          ['TEN', 0],
          ['TWENTY', 0],
          ['ONE HUNDRED', 0],
        ];

        const expectedChangeBreakdown = [
          ['PENNY', 0.5],
          ['NICKEL', 0],
          ['DIME', 0],
          ['QUARTER', 0],
          ['ONE', 0],
          ['FIVE', 0],
          ['TEN', 0],
          ['TWENTY', 0],
          ['ONE HUNDRED', 0],
        ];

        const expectedStatus = 'CLOSED';

        expect(checkCashRegister(price, cashAmount, cashBreakdownInDrawer))
          .toEqual({ status: expectedStatus, change: expectedChangeBreakdown });
      });
    });

    describe('when cash-in-draw is less than change due', () => {
      it('returns INSUFFICIENT_FUNDS with empty change', () => {
        const price = 19.5;
        const cashAmount = 20;

        const cashBreakdownInDrawer = [
          ['PENNY', 0.01],
          ['NICKEL', 0],
          ['DIME', 0],
          ['QUARTER', 0],
          ['ONE', 0],
          ['FIVE', 0],
          ['TEN', 0],
          ['TWENTY', 0],
          ['ONE HUNDRED', 0],
        ];

        expect(checkCashRegister(price, cashAmount, cashBreakdownInDrawer))
          .toEqual({ status: 'INSUFFICIENT_FUNDS', change: [] });
      });
    });

    describe('when cash-in-drawer is greater than change due', () => {
      it('returns OPEN with change', () => {
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
});
