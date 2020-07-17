describe('ES6: Use the Rest Parameter with Function Parameters', () => {
  describe('sum', () => {
    const sum = (...args) => args.reduce((a, b) => a + b, 0);

    it('is the sum of the parameters', () => {
      expect(sum(0, 1, 2)).toEqual(3);
    });
  });
});
