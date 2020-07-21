/* global Cash */

describe('JavaScript Algorithms and Data Structures Projects: Cash Register', () => {
  describe('Cash', () => {
    describe('amount', () => {
      it('is the sum of the cash breakdown values', () => {
        const cashBreakdown = [['PENNY', 1.01], ['NICKEL', 2.05]];
        const expectedAmount = 3.06; // 1.01 + 2.05

        const cash = new Cash(cashBreakdown);

        expect(cash.amount).toEqual(expectedAmount);
      });
    });

    describe('deduct(amount)', () => {
      describe('when the amount can be exactly deducted from the cash', () => {
        it('returns the subset of the cash that equals the amount', () => {
          const cash = new Cash([
            ['PENNY', 1.01],
            ['NICKEL', 2.05],
            ['DIME', 3.1],
            ['QUARTER', 4.25],
            ['ONE', 90],
            ['FIVE', 55],
            ['TEN', 20],
            ['TWENTY', 60],
            ['ONE HUNDRED', 100],
          ]);

          const amount = 96.74;
          const result = cash.deduct(amount);

          const expectedResult = [
            ['TWENTY', 60],
            ['TEN', 20],
            ['FIVE', 15],
            ['ONE', 1],
            ['QUARTER', 0.5],
            ['DIME', 0.2],
            ['PENNY', 0.04],
          ];

          expect(result.cashBreakdown).toEqual(expectedResult);
        });
      });

      describe('when the amount cannot be exactly deducted from the cash', () => {
        it('returns an empty Cash', () => {
          const cash = new Cash([
            ['PENNY', 0.01],
            ['NICKEL', 2.05],
            ['DIME', 3.1],
            ['QUARTER', 4.25],
            ['ONE', 90],
            ['FIVE', 55],
            ['TEN', 20],
            ['TWENTY', 60],
            ['ONE HUNDRED', 100],
          ]);

          const amount = 96.74;
          const result = cash.deduct(amount);

          expect(result.cashBreakdown).toEqual([]);
        });
      });
    });

    describe('denominationCounts', () => {
      it('equals the cash breakdown', () => {
        const cash = new Cash([['FIVE', 10]]);

        expect(cash.denominationCounts.length).toEqual(1);

        expect(cash.denominationCounts[0].denomination.name).toEqual('FIVE');
        expect(cash.denominationCounts[0].units).toEqual(2);
      });
    });

    describe('add(other)', () => {
      describe('when other has the same denomination', () => {
        it('combines the cash breakdown of other with the cash', () => {
          const cash = new Cash([['FIVE', 10]]);
          const other = new Cash([['FIVE', 20]]);

          const result = cash.add(other);

          expect(result.cashBreakdown.length).toEqual(1);
          expect(result.cashBreakdown[0][0]).toEqual('FIVE');
          expect(result.cashBreakdown[0][1]).toEqual(30); // 10 + 20
        });
      });

      describe('when other has a different denomination', () => {
        it('combines the cash breakdown of other with the cash', () => {
          const cash = new Cash([['FIVE', 10]]);
          const other = new Cash([['ONE', 20]]);

          const result = cash.add(other);

          expect(result.cashBreakdown.length).toEqual(2);
          expect(result.cashBreakdown[0][0]).toEqual('FIVE');
          expect(result.cashBreakdown[0][1]).toEqual(10);

          expect(result.cashBreakdown[1][0]).toEqual('ONE');
          expect(result.cashBreakdown[1][1]).toEqual(20);
        });
      });
    });

    describe('normalize', () => {
      describe('when a denomination has no units', () => {
        it('is excluded', () => {
          const cash = new Cash([['FIVE', 1], ['ONE', 0]]);
          const normalizedCash = cash.normalize;

          expect(normalizedCash.denominationCounts.length).toEqual(1);
          expect(cash.denominationCounts[0].denomination.name).toEqual('FIVE');
        });
      });

      describe('when denominations are not sorted', () => {
        it('are sorted for high to low denominations', () => {
          const cash = new Cash([['ONE', 2], ['FIVE', 3]]);
          const normalizedCash = cash.normalize;

          expect(normalizedCash.denominationCounts.length).toEqual(2);
          expect(normalizedCash.denominationCounts[0].denomination.name).toEqual('FIVE');

          expect(normalizedCash.denominationCounts[1].denomination.name).toEqual('ONE');
        });
      });
    });
  });
});
