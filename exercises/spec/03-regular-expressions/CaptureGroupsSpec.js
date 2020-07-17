describe('Regular Expressions: Reuse Patterns Using Capture Groups', () => {
  describe('reRegex', () => {
    const reRegex = /^(\d+) \1 \1$/;

    describe('when the string has numbers that are repeated only three times in a string, '
      + 'each separated by a space', () => {
      const sampleStrings = [
        '42 42 42',
        '100 100 100',
      ];

      for (let i = 0; i < sampleStrings.length; i += 1) {
        describe(`such as ${sampleStrings[i]}`, () => {
          it('matches the string', () => {
            expect(reRegex.test(sampleStrings[i])).toBeTruthy();
          });
        });
      }
    });

    describe('when the numbers are repeated four or more times', () => {
      const sampleString = '42 42 42 42';

      it('does not match the string', () => {
        expect(reRegex.test(sampleString)).toBeFalsy();
      });
    });

    describe('when the numbers are not the same numbers', () => {
      const sampleString = '1 2 3';

      it('does not match the string', () => {
        expect(reRegex.test(sampleString)).toBeFalsy();
      });
    });
  });
});
