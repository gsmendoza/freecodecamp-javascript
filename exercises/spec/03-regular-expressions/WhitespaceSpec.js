describe("Regular Expressions: Remove Whitespace from Start and End", function() {
  describe("trim", function() {
    const trim = string => {
      const wsRegex = /^(\s*)(.*?)(\s*)$/;
      const result = string.replace(wsRegex, "$2");

      return result;
    };

    it("removes Whitespace from the start and end of the string", function() {
      const string = "   Hello, World!  ";

      expect(trim(string)).toEqual("Hello, World!");
    });
  });
});
