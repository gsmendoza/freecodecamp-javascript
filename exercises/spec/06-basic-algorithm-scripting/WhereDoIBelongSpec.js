describe("Basic Algorithm Scripting: Where do I Belong", function() {
  describe("getIndexToIns", function() {
    function getIndexToIns(arr, num) {
      let sortedArr = arr.sort((a,b) => a - b);

      for (let i = sortedArr.length - 1; i >= 0; i--) {
        if (num > sortedArr[i]) {
          return i + 1;
        }
      }

      return 0;
    }

    const num = 3;

    describe('when arr is empty', function() {
      const arr = [];

      it("returns 0", function() {
        expect(getIndexToIns(arr, num)).toEqual(0);
      });
    });

    describe('when arr has one number', function() {
      describe('when num < arr[0]', function() {
        const arr = [4];

        it("returns 0", function() {
          expect(getIndexToIns(arr, num)).toEqual(0);
        });
      });

      describe('when num == arr[0]', function() {
        const arr = [3];

        it("returns 0", function() {
          expect(getIndexToIns(arr, num)).toEqual(0);
        });
      });

      describe('when num > arr[0]', function() {
        const arr = [2];

        it("returns 1", function() {
          expect(getIndexToIns(arr, num)).toEqual(1);
        });
      });
    });

    describe('when arr has multiple numbers', function() {
      describe('when arr is sorted', function() {
        describe('when num < arr[0]', function() {
          const arr = [4, 5];

          it("returns 0", function() {
            expect(getIndexToIns(arr, num)).toEqual(0);
          });
        });

        describe('when num == arr[i] and num == arr[i + 1]', function() {
          const arr = [3, 3];

          it("returns i", function() {
            expect(getIndexToIns(arr, num)).toEqual(0);
          });
        });

        describe('when num == arr[i] and num < arr[i + 1]', function() {
          const arr = [3, 4];

          it("returns i", function() {
            expect(getIndexToIns(arr, num)).toEqual(0);
          });
        });

        describe('when num > arr[i] and num < arr[i + 1]', function() {
          const arr = [2, 4];

          it("returns i + 1", function() {
            expect(getIndexToIns(arr, num)).toEqual(1);
          });
        });

        describe('when num > arr[arr.length - 1]', function() {
          const arr = [1, 2];

          it("returns arr.length", function() {
            expect(getIndexToIns(arr, num)).toEqual(2);
          });
        });

      });

      describe('when arr is not sorted', function() {
        const arr = [4, 2];

        it("returns the insertion index when the arr is sorted", function() {
          expect(getIndexToIns(arr, num)).toEqual(1);
        });
      });
    });
  });
});
