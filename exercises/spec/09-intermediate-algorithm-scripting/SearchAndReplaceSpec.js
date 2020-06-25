describe('Intermediate Algorithm Scripting: Search and Replace', () => {
  const preserveCase = ({ source, target }) => {
    const sourceFirstCharacterWithPreservedCase = /[A-Z]/.test(source[0]) ? target[0].toUpperCase() : target[0].toLowerCase();

    return sourceFirstCharacterWithPreservedCase.concat(target.slice(1));
  };

  const myReplace = (str, before, after) => {
    const afterWithCasePreservingBefore = preserveCase({ source: before, target: after });

    return str.replace(before, afterWithCasePreservingBefore);
  };

  describe('preserveCase({ source, target })', () => {
    describe('when the first character of source is upper case', () => {
      const source = 'Source';

      describe('when the first character of target is lower case', () => {
        const target = 'target';

        it('upper cases target', () => {
          const expectedResult = 'Target';

          expect(preserveCase({ source, target })).toEqual(expectedResult);
        });
      });

      describe('when the first character of target is upper case', () => {
        const target = 'Target';

        it('returns target', () => {
          expect(preserveCase({ source, target })).toEqual(target);
        });
      });
    });

    describe('when the first character of source is lower case', () => {
      const source = 'source';

      describe('when the first character of target is lower case', () => {
        const target = 'target';

        it('returns target', () => {
          expect(preserveCase({ source, target })).toEqual(target);
        });
      });

      describe('when the first character of target is upper case', () => {
        const target = 'Target';

        it('lower cases target', () => {
          const expectedResult = 'target';

          expect(preserveCase({ source, target })).toEqual(expectedResult);
        });
      });
    });
  });

  describe('myReplace(str, before, after)', () => {
    const str = 'He is Sleeping on the couch.';
    const after = 'sitting';

    describe('when a substring in str matches before', () => {
      const before = 'Sleeping';

      it('replaces the substring with after, preserving the case of before', () => {
        const expectedResult = 'He is Sitting on the couch.';

        expect(myReplace(str, before, after)).toEqual(expectedResult);
      });
    });

    describe('when there is no substring in str matching before', () => {
      const before = 'Not Sleeping';

      it('return str', () => {
        const expectedResult = 'He is Sleeping on the couch.';

        expect(myReplace(str, before, after)).toEqual(expectedResult);
      });
    });
  });
});
