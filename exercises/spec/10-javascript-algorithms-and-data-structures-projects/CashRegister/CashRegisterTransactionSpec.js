/* global CashRegisterTransaction, Cash */

describe('JavaScript Algorithms and Data Structures Projects: Cash Register', () => {
  describe('CashRegisterTransaction', () => {
    describe('status', () => {
      describe('when the cash register amount is the same as the change due amount', () => {
        it('returns CLOSED', () => {
          const cashAmount = 5;
          const price = 3;

          const cashRegister = {
            cash: new Cash([['ONE', 2]]),

            withdraw: (amount) => {
              if (amount !== 2) { throw new Error('amount should be equal to 2'); }

              return new Cash([['ONE', 2]]);
            },
          };

          const cashRegisterTransaction = new CashRegisterTransaction(
            { cashRegister, price, cashAmount },
          );

          expect(cashRegisterTransaction.status).toEqual('CLOSED');
        });
      });

      describe('when the cash register amount is more than the change due amount', () => {
        it('returns CLOSED', () => {
          const cashAmount = 5;
          const price = 3;

          const cashRegister = {
            cash: new Cash([['ONE', 3]]),

            withdraw: (amount) => {
              if (amount !== 2) { throw new Error('amount should be equal to 2'); }

              return new Cash([['ONE', 2]]);
            },
          };

          const cashRegisterTransaction = new CashRegisterTransaction(
            { cashRegister, price, cashAmount },
          );

          expect(cashRegisterTransaction.status).toEqual('OPEN');
        });
      });

      describe('when the cash register amount is less than the change due amount', () => {
        it('returns INSUFFICIENT_FUNDS', () => {
          const cashAmount = 5;
          const price = 3;

          const cashRegister = {
            cash: new Cash([['ONE', 1]]),

            withdraw: (amount) => {
              if (amount !== 2) { throw new Error('amount should be equal to 2'); }

              return new Cash([]);
            },
          };

          const cashRegisterTransaction = new CashRegisterTransaction(
            { cashRegister, price, cashAmount },
          );

          expect(cashRegisterTransaction.status).toEqual('INSUFFICIENT_FUNDS');
        });
      });

      describe('when the cash register cannot return an exact change', () => {
        it('returns INSUFFICIENT_FUNDS', () => {
          const cashAmount = 5;
          const price = 3;

          const cashRegister = {
            cash: new Cash([['FIVE', 1]]),

            withdraw: (amount) => {
              if (amount !== 2) { throw new Error('amount should be equal to 2'); }

              return new Cash([]);
            },
          };

          const cashRegisterTransaction = new CashRegisterTransaction(
            { cashRegister, price, cashAmount },
          );

          // Cannot return 2 dollar change from the FIVE in the cash register.
          expect(cashRegisterTransaction.status).toEqual('INSUFFICIENT_FUNDS');
        });
      });
    });

    describe('changeBreakdown', () => {
      it('withdraws the change from the cash register', () => {
        const cashAmount = 5;
        const price = 3;
        const expectedChangeAmount = 2; // 5 - 3
        const expectedChangeBreakdown = [['ONE', 2]];

        const cashRegister = {
          cash: new Cash([['ONE', 3]]),

          withdraw: (amount) => {
            if (amount !== expectedChangeAmount) {
              throw new Error(`amount should be equal to ${expectedChangeAmount}`);
            }

            return { cashBreakdown: expectedChangeBreakdown };
          },
        };

        const cashRegisterTransaction = new CashRegisterTransaction(
          { cashRegister, price, cashAmount },
        );

        const { changeBreakdown } = cashRegisterTransaction;

        expect(changeBreakdown.length).toEqual(1);
        expect(changeBreakdown[0][0]).toEqual('ONE');
        expect(changeBreakdown[0][1]).toEqual(2);
      });

      describe('when the cash register amount is less than the change due amount', () => {
        it('returns an empty breakdown', () => {
          const cashAmount = 5;
          const price = 3;

          const cashRegister = {
            cash: new Cash([['ONE', 1]]),

            withdraw: (amount) => {
              if (amount !== 2) { throw new Error('amount should be equal to 2'); }

              return new Cash([]);
            },
          };

          const cashRegisterTransaction = new CashRegisterTransaction(
            { cashRegister, price, cashAmount },
          );

          expect(cashRegisterTransaction.changeBreakdown).toEqual([]);
        });
      });
    });
  });
});
