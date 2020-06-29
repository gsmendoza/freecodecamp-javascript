describe('JavaScript Algorithms and Data Structures Projects: Palindrome Checker', () => {
  const pipe = (...fns) => (param) => fns.reduce((result, fn) => fn(result), param);

  const PalindromeChecker = {
    removeAlphanumeric: (str) => str.replace(/[\W_]/g, ''),

    toLowerCase: (str) => str.toLowerCase(),

    reverse: (str) => {
      const reverse = (result, char) => result.concat(char);

      return str.split('').reduceRight(reverse, '');
    },
  };

  const palindrome = (str) => {
    const normalizedString = pipe(
      PalindromeChecker.removeAlphanumeric,
      PalindromeChecker.toLowerCase,
    )(str);

    const normalizedReversedString = pipe(
      PalindromeChecker.reverse,
      PalindromeChecker.removeAlphanumeric,
      PalindromeChecker.toLowerCase,
    )(str);

    return normalizedString === normalizedReversedString;
  };

  describe('PalindromeChecker', () => {
    describe('.removeAlphanumeric(str)', () => {
      it('removes non-word characters', () => {
        expect(PalindromeChecker.removeAlphanumeric('a!@')).toEqual('a');
      });

      it('removes the underscores', () => {
        expect(PalindromeChecker.removeAlphanumeric('a__')).toEqual('a');
      });
    });

    describe('.reverse(str)', () => {
      it('returns the reverse of a string', () => {
        expect(PalindromeChecker.reverse('ab')).toEqual('ba');
      });
    });

    describe('.toLowerCase(str)', () => {
      it('converts uppercase characters to lowercase', () => {
        expect(PalindromeChecker.toLowerCase('ABc')).toEqual('abc');
      });
    });
  });

  describe('palindrome(str)', () => {
    let str;

    describe('when str is a palindrome', () => {
      beforeEach(() => {
        str = 'A man, a plan, a canal. Panama!';
      });

      it('is true', () => {
        expect(palindrome(str)).toBeTruthy();
      });
    });

    describe('when str is not a palindrome', () => {
      beforeEach(() => {
        str = 'ab';
      });

      it('is false', () => {
        expect(palindrome(str)).toBeFalsy();
      });
    });
  });
});
