describe('Regular Expressions: Positive and Negative Lookahead', () => {
  describe('pwRegex', () => {
    const pwRegex = /(?=.{6,})(?=^\D.*\d{2,})/;

    describe('when the password is greater than 5 characters long, '
      + 'do not begin with numbers, and have two consecutive digits', () => {
      const sampleWords = [
        'abcd12',
        'a12bcd',
        'astr1on11aut',
      ];

      for (let i = 0; i < sampleWords.length; i += 1) {
        describe(`such as ${sampleWords[i]}`, () => {
          it('matches the password', () => {
            expect(pwRegex.test(sampleWords[i])).toBeTruthy();
          });
        });
      }
    });

    describe('when the password is 5 characters long, ', () => {
      const sampleWord = 'abc12';

      it('does not match the password', () => {
        expect(pwRegex.test(sampleWord)).toBeFalsy();
      });
    });

    describe('when the password begins with a number, ', () => {
      const sampleWord = '12abcd';

      it('does not match the password', () => {
        expect(pwRegex.test(sampleWord)).toBeFalsy();
      });
    });

    describe('when the password has only one number, ', () => {
      const sampleWord = 'abcde1';

      it('does not match the password', () => {
        expect(pwRegex.test(sampleWord)).toBeFalsy();
      });
    });
  });
});
