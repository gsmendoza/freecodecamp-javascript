describe('Intermediate Algorithm Scripting: DNA Pairing', () => {
  const pairElement = (str) => {
    const PAIR_CHARACTER = {
      A: 'T',
      T: 'A',
      C: 'G',
      G: 'C',
    };

    return str.split('').map((character) => [character, PAIR_CHARACTER[character]]);
  };

  describe('pairElement(str)', () => {
    let str;

    describe('when the string is empty', () => {
      beforeEach(() => {
        str = '';
      });

      it('returns an empty array', () => {
        expect(pairElement(str)).toEqual([]);
      });
    });

    describe('when the string has one character', () => {
      beforeEach(() => {
        str = 'A';
      });

      it('returns the base pair matching that character', () => {
        const expectedResult = [['A', 'T']];

        expect(pairElement(str)).toEqual(expectedResult);
      });
    });

    describe('when the string has multiple characters', () => {
      beforeEach(() => {
        str = 'AT';
      });

      it('returns the base pairs matching those character', () => {
        const expectedResult = [['A', 'T'], ['T', 'A']];

        expect(pairElement(str)).toEqual(expectedResult);
      });
    });
  });
});
