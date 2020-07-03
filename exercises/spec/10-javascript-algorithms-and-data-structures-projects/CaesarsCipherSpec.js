describe('JavaScript Algorithms and Data Structures Projects: Caesars Cipher', () => {
  const rot13Character = (char) => {
    if (/[^A-Z]/.test(char)) {
      return char;
    }

    const MIN_CHAR_CODE = 'A'.charCodeAt(0);
    const NUM_ALPHABET_CHARACTERS = 26;
    const SHIFT = 13;

    const shiftedCharCode = ((char.charCodeAt(0) - MIN_CHAR_CODE + SHIFT) % NUM_ALPHABET_CHARACTERS)
      + MIN_CHAR_CODE;

    return String.fromCharCode(shiftedCharCode);
  };

  const rot13 = (string) => string.split('').map((char) => rot13Character(char)).join('');

  describe('rot13Character(char)', () => {
    describe('when char is alphabetic character in the lower 13-char range (A-M)', () => {
      it('returns the char 13 places after the character', () => {
        expect(rot13Character('A')).toEqual('N');
        expect(rot13Character('M')).toEqual('Z');
      });
    });

    describe('when char is alphabetic character in the higher 13-char range (N-Z)', () => {
      it('returns the char 13 places before the character', () => {
        expect(rot13Character('N')).toEqual('A');
        expect(rot13Character('Z')).toEqual('M');
      });
    });

    describe('when char is a non-alphabetic character', () => {
      it('returns the char', () => {
        expect(rot13Character('!')).toEqual('!');
      });
    });
  });

  describe('rot13', () => {
    it('decodes an ROT13 encoded string', () => {
      const encodedString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!';

      const expectedDecodedString = 'NOPQRSTUVWXYZABCDEFGHIJKLM!';

      expect(rot13(encodedString)).toEqual(expectedDecodedString);
    });
  });
});
