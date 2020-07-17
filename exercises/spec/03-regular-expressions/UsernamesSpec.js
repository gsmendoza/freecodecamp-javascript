describe('Regular Expressions: Restrict Possible Usernames', () => {
  describe('userCheck', () => {
    const testUserCheck = (username) => /^((\D\d\d+)|(\D\D+\d*))$/.test(username);

    describe('when the username satisfies the rules', () => {
      const usernames = [
        'AB',
        'JackOfAllTrades',
        'Z97',
      ];

      for (let i = 0; i < usernames.length; i += 1) {
        describe(`such as ${usernames[i]}`, () => {
          it('is valid', () => {
            expect(testUserCheck(usernames[i])).toBeTruthy();
          });
        });
      }
    });

    describe('when the username has less than 2 characters', () => {
      const username = 'A';

      it('is invalid', () => {
        expect(testUserCheck(username)).toBeFalsy();
      });
    });

    describe('when the username only has two characters and some of them are numbers', () => {
      const username = 'A1';

      it('is invalid', () => {
        expect(testUserCheck(username)).toBeFalsy();
      });
    });

    describe('when the username has numbers at the start', () => {
      const username = '007';

      it('is invalid', () => {
        expect(testUserCheck(username)).toBeFalsy();
      });
    });

    describe('when the username has numbers in the middle', () => {
      const username = 'BadUs3rnam3';

      it('is invalid', () => {
        expect(testUserCheck(username)).toBeFalsy();
      });
    });
  });
});
