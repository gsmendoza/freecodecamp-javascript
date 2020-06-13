describe("Regular Expressions: Restrict Possible Usernames", function() {
  describe("userCheck", function() {
    const testUserCheck = function(username) {
      return /^((\D\d\d+)|(\D\D+\d*))$/.test(username)
    };

    describe("when the username satisfies the rules", function() {
      const usernames = [
        "AB",
        "JackOfAllTrades",
        "Z97"
      ];

      for(let i = 0; i < usernames.length; i++) {
        describe(`such as ${usernames[i]}`, function() {
          it("is valid", function() {
            expect(testUserCheck(usernames[i])).toBeTruthy();
          });
        });
      }
    });

    describe("when the username has less than 2 characters", function() {
      const username = "A";

      it("is invalid", function() {
        expect(testUserCheck(username)).toBeFalsy();
      });
    });

    describe("when the username only has two characters and some of them are numbers", function() {
      const username = "A1";

      it("is invalid", function() {
        expect(testUserCheck(username)).toBeFalsy();
      });
    });

    describe("when the username has numbers at the start", function() {
      const username = "007";

      it("is invalid", function() {
        expect(testUserCheck(username)).toBeFalsy();
      });
    });

    describe("when the username has numbers in the middle", function() {
      const username = "BadUs3rnam3";

      it("is invalid", function() {
        expect(testUserCheck(username)).toBeFalsy();
      });
    });

  });
});
