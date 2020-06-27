describe('Intermediate Algorithm Scripting: Map the Debris', () => {
  const convertAvgAltToOrbitalPeriod = (avgAlt) => {
    const EARTH_RADIUS = 6367.4447;
    const GM = 398600.4418;

    return Math.round(
      2 * Math.PI * Math.sqrt(
        ((EARTH_RADIUS + avgAlt) ** 3) / GM,
      ),
    );
  };

  const orbitalPeriod = (arr) => arr.map((element) => ({
    name: element.name,
    orbitalPeriod: convertAvgAltToOrbitalPeriod(element.avgAlt),
  }));

  describe('convertAvgAltToOrbitalPeriod(avgAlt)', () => {
    it('returns 2 * PI * sqrt(((EARTH_RADIUS + avgAlt) ^ 3)/GM)', () => {
      expect(convertAvgAltToOrbitalPeriod(35873.5553)).toEqual(86400);
    });
  });

  describe('orbitalPeriod(arr)', () => {
    let arr;

    describe('when arr is empty', () => {
      beforeEach(() => {
        arr = [];
      });

      it('returns an empty array', () => {
        expect(orbitalPeriod(arr)).toEqual([]);
      });
    });

    describe('when arr has one element', () => {
      beforeEach(() => {
        arr = [{ name: 'sputnik', avgAlt: 35873.5553 }];
      });

      it('returns the element with its orbital period', () => {
        expect(orbitalPeriod(arr)).toEqual([{ name: 'sputnik', orbitalPeriod: 86400 }]);
      });
    });
  });
});
