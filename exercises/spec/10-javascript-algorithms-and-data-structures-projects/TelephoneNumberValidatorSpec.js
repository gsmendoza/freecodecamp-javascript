describe('JavaScript Algorithms and Data Structures Projects: Telephone Number Validator', () => {
  const telephoneCheck = (str) => {
    const VALID_TELEPHONE_FORMATS = [
      /^1 \(\d{3}\) \d{3}-\d{4}$/,
      /^1 \d{3} \d{3} \d{4}$/,
      /^1 \d{3}-\d{3}-\d{4}$/,
      /^1\(\d{3}\)\d{3}-\d{4}$/,
      /^\(\d{3}\)\d{3}-\d{4}$/,
      /^\d{10}$/,
      /^\d{3}-\d{3}-\d{4}$/,
    ];

    return VALID_TELEPHONE_FORMATS.some((format) => format.test(str));
  };

  describe('telephoneCheck(str)', () => {
    let str;

    describe('where str follows the format 1 555-555-5555', () => {
      beforeEach(() => {
        str = '1 555-555-5555';
      });

      it('returns true', () => {
        expect(telephoneCheck(str)).toBeTruthy();
      });
    });

    describe('where str follows the format 1 (555) 555-5555', () => {
      beforeEach(() => {
        str = '1 (555) 555-5555';
      });

      it('returns true', () => {
        expect(telephoneCheck(str)).toBeTruthy();
      });
    });

    describe('where str follows the format 5555555555', () => {
      beforeEach(() => {
        str = '5555555555';
      });

      it('returns true', () => {
        expect(telephoneCheck(str)).toBeTruthy();
      });
    });

    describe('where str follows the format 555-555-5555', () => {
      beforeEach(() => {
        str = '555-555-5555';
      });

      it('returns true', () => {
        expect(telephoneCheck(str)).toBeTruthy();
      });
    });

    describe('where str follows the format (555)555-5555', () => {
      beforeEach(() => {
        str = '(555)555-5555';
      });

      it('returns true', () => {
        expect(telephoneCheck(str)).toBeTruthy();
      });
    });

    describe('where str follows the format 1(555)555-5555', () => {
      beforeEach(() => {
        str = '1(555)555-5555';
      });

      it('returns true', () => {
        expect(telephoneCheck(str)).toBeTruthy();
      });
    });

    describe('where str follows the format 1 555 555 5555', () => {
      beforeEach(() => {
        str = '1 555 555 5555';
      });

      it('returns true', () => {
        expect(telephoneCheck(str)).toBeTruthy();
      });
    });

    describe('where the country code is not 1', () => {
      beforeEach(() => {
        str = '2 555 555 5555';
      });

      it('returns false', () => {
        expect(telephoneCheck(str)).toBeFalsy();
      });
    });
  });
});
