/* global CashRegisterTransaction, CashRegister, Cash */

describe('JavaScript Algorithms and Data Structures Projects: Cash Register', () => {
  describe('CashRegisterTransaction', () => {
    describe('status', () => {
      describe('when the cash register amount is the same as the change due amount', () => {
        it('returns CLOSED', () => {
          const cashAmount = 5;
          const price = 3;
          const cashRegister = new CashRegister({ cashBreakdown: [['ONE', 2]] });

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
          const cashRegister = new CashRegister({ cashBreakdown: [['ONE', 3]] });

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
          const cashRegister = new CashRegister({ cashBreakdown: [['ONE', 1]] });

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
          const cashRegister = new CashRegister({ cashBreakdown: [['FIVE', 1]] });

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

        const cashRegister = new CashRegister({ cashBreakdown: [['ONE', 3]] });

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
          const cashRegister = new CashRegister({ cashBreakdown: [['ONE', 1]] });

          const cashRegisterTransaction = new CashRegisterTransaction(
            { cashRegister, price, cashAmount },
          );

          expect(cashRegisterTransaction.changeBreakdown).toEqual([]);
        });
      });
    });
  });
});
