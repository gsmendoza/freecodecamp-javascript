describe('JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter', () => {
  const convertToRoman = (num) => {
    const convertSingleDecimalDigitToRoman = ({ digit, powerOfTen }) => {
      const DECIMAL_TO_ROMAN = [
        {
          1: 'I',
          5: 'V',
        },
        {
          1: 'X',
          5: 'L',
        },
        {
          1: 'C',
          5: 'D',
        },
        {
          1: 'M',
        },
      ];

      let result = '';

      let fourDigitSubtractedFrom;
      let multiplesOfFive;
      let multiplesOfOneDigit;

      /* eslint-disable prefer-destructuring */
      if (digit >= 5) {
        fourDigitSubtractedFrom = DECIMAL_TO_ROMAN[powerOfTen + 1][1]; // e.g. X
        multiplesOfFive = 1;
        multiplesOfOneDigit = digit - 5;
      } else {
        fourDigitSubtractedFrom = DECIMAL_TO_ROMAN[powerOfTen][5]; // e.g. V
        multiplesOfFive = 0;
        multiplesOfOneDigit = digit;
      }
      /* eslint-enable prefer-destructuring */

      if (multiplesOfOneDigit === 4) {
        result = result
          .concat(DECIMAL_TO_ROMAN[powerOfTen][1])
          .concat(fourDigitSubtractedFrom);
      } else {
        for (let i = multiplesOfFive; i > 0; i -= 1) {
          result = result.concat(DECIMAL_TO_ROMAN[powerOfTen][5]);
        }

        for (let i = 0; i < multiplesOfOneDigit; i += 1) {
          result = result.concat(DECIMAL_TO_ROMAN[powerOfTen][1]);
        }
      }

      return result;
    };

    let result = '';
    let remainder = num;

    for (let powerOfTen = 3; powerOfTen >= 0; powerOfTen -= 1) {
      const digit = Math.floor(remainder / 10 ** powerOfTen);
      remainder %= 10 ** powerOfTen;

      result = result.concat(convertSingleDecimalDigitToRoman({ digit, powerOfTen }));
    }

    return result;
  };

  describe('convertToRoman(num)', () => {
    let num;

    describe('when num = 1', () => {
      beforeEach(() => {
        num = 1;
      });

      it('is expected to be I', () => {
        expect(convertToRoman(num)).toEqual('I');
      });
    });

    describe('when num = 3', () => {
      beforeEach(() => {
        num = 3;
      });

      it('is expected to be III', () => {
        expect(convertToRoman(num)).toEqual('III');
      });
    });

    describe('when num = 4', () => {
      beforeEach(() => {
        num = 4;
      });

      it('is expected to be IV', () => {
        expect(convertToRoman(num)).toEqual('IV');
      });
    });

    describe('when num = 5', () => {
      beforeEach(() => {
        num = 5;
      });

      it('is expected to be V', () => {
        expect(convertToRoman(num)).toEqual('V');
      });
    });

    describe('when num = 8', () => {
      beforeEach(() => {
        num = 8;
      });

      it('is expected to be VIII', () => {
        expect(convertToRoman(num)).toEqual('VIII');
      });
    });

    describe('when num = 9', () => {
      beforeEach(() => {
        num = 9;
      });

      it('is expected to be IX', () => {
        expect(convertToRoman(num)).toEqual('IX');
      });
    });

    describe('when num = 10', () => {
      beforeEach(() => {
        num = 10;
      });

      it('is expected to be X', () => {
        expect(convertToRoman(num)).toEqual('X');
      });
    });

    describe('when num = 11', () => {
      beforeEach(() => {
        num = 11;
      });

      it('is expected to be XI', () => {
        expect(convertToRoman(num)).toEqual('XI');
      });
    });

    describe('when num = 100', () => {
      beforeEach(() => {
        num = 100;
      });

      it('is expected to be C', () => {
        expect(convertToRoman(num)).toEqual('C');
      });
    });

    describe('when num = 1000', () => {
      beforeEach(() => {
        num = 1000;
      });

      it('is expected to be M', () => {
        expect(convertToRoman(num)).toEqual('M');
      });
    });

    describe('when num = 1444', () => {
      beforeEach(() => {
        num = 1444;
      });

      it('is expected to be MCDXLIV', () => {
        expect(convertToRoman(num)).toEqual('MCDXLIV');
      });
    });

    describe('when num = 1999', () => {
      beforeEach(() => {
        num = 1999;
      });

      it('is expected to be MCMXCIX', () => {
        expect(convertToRoman(num)).toEqual('MCMXCIX');
      });
    });

    describe('when num = 3333', () => {
      beforeEach(() => {
        num = 3333;
      });

      it('is expected to be MMMCCCXXXIII', () => {
        expect(convertToRoman(num)).toEqual('MMMCCCXXXIII');
      });
    });

    describe('when num = 3888', () => {
      beforeEach(() => {
        num = 3888;
      });

      it('is expected to be MMMDCCCLXXXVIII', () => {
        expect(convertToRoman(num)).toEqual('MMMDCCCLXXXVIII');
      });
    });
  });
});
