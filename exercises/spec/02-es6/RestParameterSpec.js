describe("ES6: Use the Rest Parameter with Function Parameters", function() {
  describe("sum", function() {
    const sum = (...args) => {
      return args.reduce((a, b) => a + b, 0);
    }

    it("is the sum of the parameters", function() {
      expect(sum(0, 1, 2)).toEqual(3);
    });
  });
});
