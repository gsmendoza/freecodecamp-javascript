describe("Intermediate Algorithm Scripting: Diff Two Arrays", () => {
  describe("diffArray", () => {
    function itemsInSourceNotInTarget(source, target) {
      return source.filter(item => !target.includes(item));
    }

    function diffArray(arr1, arr2) {
      return itemsInSourceNotInTarget(arr1, arr2).concat(itemsInSourceNotInTarget(arr2, arr1));
    }

    let arr1 = [];
    let arr2 = [];
    let executeDiffArray = () => diffArray(arr1, arr2);

    describe('when arr1 is empty', () => {
      beforeEach(() => {
        arr1 = [];
      });

      describe('when arr2 is empty', () => {
        beforeEach(() => {
          arr2 = [];
        });

        it('returns []', () => {
          expect(executeDiffArray()).toEqual([]);
        });
      });

      describe('when arr2 has an item', () => {
        beforeEach(() => {
          arr2 = [0];
        });

        it('returns arr2', () => {
          expect(executeDiffArray()).toEqual([0]);
        });
      })
    })


    describe('when arr1 has an item', () => {
      beforeEach(() => {
        arr1 = [0];
      });

      describe('when arr2 is empty', () => {
        beforeEach(() => {
          arr2 = [];
        });

        it('returns arr1', () => {
          expect(executeDiffArray()).toEqual([0]);
        });
      });

      describe('when arr2 has an item', () => {
        describe('when arr2 item is the same as arr1 item', () => {
          beforeEach(() => {
            arr2 = arr1.slice();
          });

          it('returns []', () => {
            expect(executeDiffArray()).toEqual([]);
          });
        });

        describe('when arr2 item is not the same as arr1 item', () => {
          beforeEach(() => {
            arr2 = [arr1[0] + 1];
          });

          it('returns arr1 + arr2', () => {
            expect(executeDiffArray()).toEqual([0, 1]);
          });
        });
      });
    });
  });
});
