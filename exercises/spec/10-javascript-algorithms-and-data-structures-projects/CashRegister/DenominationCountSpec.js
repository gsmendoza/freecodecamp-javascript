/* global Denomination, DenominationCount */

describe('JavaScript Algorithms and Data Structures Projects: Cash Register', () => {
  describe('DenominationCount', () => {
    describe('subsume(amount)', () => {
      it('returns the biggest portion of amount that can be taken from the denomination count', () => {
        const denomination = Denomination.find('FIVE');
        const denominationCount = new DenominationCount({ denomination, units: 2 });
        const amount = 7;

        const subsumedDenominationCount = denominationCount.subsume(amount);

        expect(subsumedDenominationCount.denomination.name).toEqual('FIVE');
        expect(subsumedDenominationCount.units).toEqual(1);
      });
    });
  });
});
