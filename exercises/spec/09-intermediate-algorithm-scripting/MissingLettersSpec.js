describe('Intermediate Algorithm Scripting: Missing letters', () => {
  const fearNotLetter = (str) => {
    const charCodeWithNoSucceedingLetter = str.split('')
      .map((char) => char.charCodeAt(0))
      .filter((charCode, i, array) => i < array.length - 1 && charCode + 1 !== array[i + 1]);

    return charCodeWithNoSucceedingLetter[0]
      ? String.fromCharCode(charCodeWithNoSucceedingLetter[0] + 1)
      : undefined;
  };

  describe('fearNotLetter(str)', () => {
    let str;

    describe('when the str is empty', () => {
      beforeEach(() => {
        str = '';
      });

      it('returns undefined', () => {
        expect(fearNotLetter(str)).toBeUndefined();
      });
    });

    describe('when the str has one letter', () => {
      beforeEach(() => {
        str = 'a';
      });

      it('returns undefined', () => {
        expect(fearNotLetter(str)).toBeUndefined();
      });
    });

    describe('when the str has multiple letters', () => {
      describe('when str has missing letters in its range of letters', () => {
        beforeEach(() => {
          str = 'ac';
        });

        it('returns the missing letter in the range', () => {
          expect(fearNotLetter(str)).toEqual('b');
        });
      });

      describe('when str does not have missing letters in its range of letters', () => {
        beforeEach(() => {
          str = 'ab';
        });

        it('returns undefined', () => {
          expect(fearNotLetter(str)).toBeUndefined();
        });
      });
    });
  });
});
