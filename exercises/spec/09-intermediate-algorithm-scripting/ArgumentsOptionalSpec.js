describe('Intermediate Algorithm Scripting: Arguments Optional', () => {
  const addTogether = (x, y = null) => {
    if (typeof (x) !== 'number') { return undefined; }
    if (typeof (y) !== 'number' && y !== null) { return undefined; }
    if (y) { return x + y; }

    const sumWithX = (y1) => {
      if (typeof (y1) !== 'number') { return undefined; }

      return x + y1;
    };

    return sumWithX;
  };

  describe('addTogether(x, y)', () => {
    let x;
    let y;
    let sumWithX;

    describe('when x is a number', () => {
      beforeEach(() => {
        x = 1;
      });

      describe('when y is a number', () => {
        beforeEach(() => {
          y = 2;
        });

        it('returns the sum', () => {
          expect(addTogether(x, y)).toEqual(3);
        });
      });

      describe('when y is not provided', () => {
        beforeEach(() => {
          sumWithX = addTogether(x);
        });

        describe('when the y provided to the returned function is a number', () => {
          beforeEach(() => {
            y = 2;
          });

          it('returns the sum', () => {
            expect(sumWithX(y)).toEqual(3);
          });
        });

        describe('when the y provided to the returned function is not a number', () => {
          beforeEach(() => {
            y = '2';
          });

          it('returns undefined', () => {
            expect(sumWithX(y)).toBeUndefined();
          });
        });
      });

      describe('when y is not a number', () => {
        beforeEach(() => {
          y = '2';
        });

        it('returns undefined', () => {
          expect(addTogether(x, y)).toBeUndefined();
        });
      });
    });

    describe('when x is not a number', () => {
      beforeEach(() => {
        x = '2';
      });

      it('returns undefined', () => {
        expect(addTogether(x)).toBeUndefined();
      });
    });
  });
});
