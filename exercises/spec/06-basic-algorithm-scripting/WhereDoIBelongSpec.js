describe('Basic Algorithm Scripting: Where do I Belong', () => {
  describe('getIndexToIns', () => {
    function getIndexToIns(arr, num) {
      const sortedArr = arr.sort((a, b) => a - b);

      for (let i = sortedArr.length - 1; i >= 0; i -= 1) {
        if (num > sortedArr[i]) {
          return i + 1;
        }
      }

      return 0;
    }

    const num = 3;

    describe('when arr is empty', () => {
      const arr = [];

      it('returns 0', () => {
        expect(getIndexToIns(arr, num)).toEqual(0);
      });
    });

    describe('when arr has one number', () => {
      describe('when num < arr[0]', () => {
        const arr = [4];

        it('returns 0', () => {
          expect(getIndexToIns(arr, num)).toEqual(0);
        });
      });

      describe('when num == arr[0]', () => {
        const arr = [3];

        it('returns 0', () => {
          expect(getIndexToIns(arr, num)).toEqual(0);
        });
      });

      describe('when num > arr[0]', () => {
        const arr = [2];

        it('returns 1', () => {
          expect(getIndexToIns(arr, num)).toEqual(1);
        });
      });
    });

    describe('when arr has multiple numbers', () => {
      describe('when arr is sorted', () => {
        describe('when num < arr[0]', () => {
          const arr = [4, 5];

          it('returns 0', () => {
            expect(getIndexToIns(arr, num)).toEqual(0);
          });
        });

        describe('when num == arr[i] and num == arr[i + 1]', () => {
          const arr = [3, 3];

          it('returns i', () => {
            expect(getIndexToIns(arr, num)).toEqual(0);
          });
        });

        describe('when num == arr[i] and num < arr[i + 1]', () => {
          const arr = [3, 4];

          it('returns i', () => {
            expect(getIndexToIns(arr, num)).toEqual(0);
          });
        });

        describe('when num > arr[i] and num < arr[i + 1]', () => {
          const arr = [2, 4];

          it('returns i + 1', () => {
            expect(getIndexToIns(arr, num)).toEqual(1);
          });
        });

        describe('when num > arr[arr.length - 1]', () => {
          const arr = [1, 2];

          it('returns arr.length', () => {
            expect(getIndexToIns(arr, num)).toEqual(2);
          });
        });
      });

      describe('when arr is not sorted', () => {
        const arr = [4, 2];

        it('returns the insertion index when the arr is sorted', () => {
          expect(getIndexToIns(arr, num)).toEqual(1);
        });
      });
    });
  });
});
