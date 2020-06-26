describe('Intermediate Algorithm Scripting: Sum All Primes', () => {
  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  };

  const sumPrimes = (num) => {
    let result = 0;

    for (let i = 2; i <= num; i += 1) {
      if (isPrime(i)) {
        result += i;
      }
    }

    return result;
  };

  describe('isPrime(num)', () => {
    let num;

    describe('when num is divisible only by 1 and itself', () => {
      beforeEach(() => {
        num = 2;
      });

      it('is truthy', () => {
        expect(isPrime(num)).toBeTruthy();
      });
    });

    describe('when num is divisible by another number aside from 1 and itself', () => {
      beforeEach(() => {
        num = 4;
      });

      it('is falsey', () => {
        expect(isPrime(num)).toBeFalsy();
      });
    });
  });

  describe('sumPrimes(num)', () => {
    let num;

    describe('when num is 2', () => {
      beforeEach(() => {
        num = 2;
      });

      it('is equal to 2', () => {
        expect(sumPrimes(num)).toEqual(2);
      });
    });

    describe('when num is 3', () => {
      beforeEach(() => {
        num = 3;
      });

      it('is equal to 2 + 3', () => {
        expect(sumPrimes(num)).toEqual(2 + 3);
      });
    });

    describe('when num is 4', () => {
      beforeEach(() => {
        num = 4;
      });

      it('is equal to 2 + 3', () => {
        expect(sumPrimes(num)).toEqual(2 + 3);
      });
    });

    describe('when num is 10', () => {
      beforeEach(() => {
        num = 10;
      });

      it('is equal to 2 + 3 + 5 + 7', () => {
        expect(sumPrimes(num)).toEqual(2 + 3 + 5 + 7);
      });
    });
  });
});
