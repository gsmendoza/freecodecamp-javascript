describe('Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers', () => {
  const sumFibs = (num) => {
    let previousFib = 1;
    let currentFib = 1;
    let result = previousFib;

    while (currentFib <= num) {
      if (currentFib % 2 === 1) {
        result += currentFib;
      }

      const newPreviousFib = currentFib;

      currentFib += previousFib;
      previousFib = newPreviousFib;
    }

    return result;
  };

  describe('sumFibs(num)', () => {
    let num;

    describe('when num = 1', () => {
      beforeEach(() => {
        num = 1;
      });

      it('equals 1 + 1', () => {
        expect(sumFibs(num)).toEqual(1 + 1);
      });
    });

    describe('when num = 2', () => {
      beforeEach(() => {
        num = 2;
      });

      it('equals 1 + 1', () => {
        expect(sumFibs(num)).toEqual(1 + 1);
      });
    });

    describe('when num = 3', () => {
      beforeEach(() => {
        num = 3;
      });

      it('equals 1 + 1 + 3', () => {
        expect(sumFibs(num)).toEqual(1 + 1 + 3);
      });
    });

    describe('when num = 5', () => {
      beforeEach(() => {
        num = 5;
      });

      it('equals 1 + 1 + 3 + 5', () => {
        expect(sumFibs(num)).toEqual(1 + 1 + 3 + 5);
      });
    });
  });
});
