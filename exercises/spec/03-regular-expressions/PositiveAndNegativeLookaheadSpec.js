describe("Regular Expressions: Positive and Negative Lookahead", function() {
  describe("pwRegex", function() {
    const pwRegex = /(?=.{6,})(?=^\D.*\d{2,})/;

    describe("when the password is greater than 5 characters long, " +
      "do not begin with numbers, and have two consecutive digits", function() {

      const sampleWords = [
        "abcd12",
        "a12bcd",
        "astr1on11aut"
      ];

      for(let i = 0; i < sampleWords.length; i++) {
        describe(`such as ${sampleWords[i]}`, function() {
          it("matches the password", function() {
            expect(pwRegex.test(sampleWords[i])).toBeTruthy();
          });
        });
      }
    });

    describe("when the password is 5 characters long, ", function() {
      const sampleWord = "abc12";

      it("does not match the password", function() {
        expect(pwRegex.test(sampleWord)).toBeFalsy();
      });
    });

    describe("when the password begins with a number, ", function() {
      const sampleWord = "12abcd";

      it("does not match the password", function() {
        expect(pwRegex.test(sampleWord)).toBeFalsy();
      });
    });

    describe("when the password has only one number, ", function() {
      const sampleWord = "abcde1";

      it("does not match the password", function() {
        expect(pwRegex.test(sampleWord)).toBeFalsy();
      });
    });
  });
});
