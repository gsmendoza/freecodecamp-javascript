describe("Regular Expressions: Reuse Patterns Using Capture Groups", function() {
  describe("reRegex", function() {
    const reRegex = /^(\d+) \1 \1$/;

    describe("when the string has numbers that are repeated only three times in a string, " +
      "each separated by a space", function() {

      const sampleStrings = [
        "42 42 42",
        "100 100 100"
      ];

      for(let i = 0; i < sampleStrings.length; i++) {
        describe(`such as ${sampleStrings[i]}`, function() {
          it("matches the string", function() {
            expect(reRegex.test(sampleStrings[i])).toBeTruthy();
          });
        });
      }
    });

    describe("when the numbers are repeated four or more times", function() {
      const sampleString = "42 42 42 42";

      it("does not match the string", function() {
        expect(reRegex.test(sampleString)).toBeFalsy();
      });
    });

    describe("when the numbers are not the same numbers", function() {
      const sampleString = "1 2 3";

      it("does not match the string", function() {
        expect(reRegex.test(sampleString)).toBeFalsy();
      });
    });
  });
});
