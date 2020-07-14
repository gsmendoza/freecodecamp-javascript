/* global CashRegister, CashRegisterTransaction, checkCashRegister */

const checkCashRegister = (price, cashAmount, cashBreakdownInDrawer) => {
  const cashRegister = new CashRegister({ cashBreakdown: cashBreakdownInDrawer });

  const cashRegisterTransaction = new CashRegisterTransaction(
    { cashRegister, price, cashAmount },
  );

  return {
    status: cashRegisterTransaction.status,
    change: cashRegisterTransaction.changeBreakdown,
  };
};
