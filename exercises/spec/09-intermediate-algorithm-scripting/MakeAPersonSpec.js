describe('Intermediate Algorithm Scripting: Make a Person', () => {
  function Person(fullName) {
    let thisFirstName;
    let thisLastName;

    this.getFirstName = () => thisFirstName;

    this.setFirstName = (firstName) => {
      thisFirstName = firstName;
    };

    this.getLastName = () => thisLastName;

    this.setLastName = (lastName) => {
      thisLastName = lastName;
    };

    this.getFullName = () => [this.getFirstName(), this.getLastName()].join(' ');

    this.setFullName = (aFullName) => {
      const [firstName, ...lastNameTokens] = aFullName.split(' ');
      const lastName = lastNameTokens.join(' ');

      this.setFirstName(firstName);
      this.setLastName(lastName);
    };

    this.setFullName(fullName);
  }

  describe('Person', () => {
    let person;

    beforeEach(() => {
      person = new Person('Bob Ross');
    });

    describe('new Person', () => {
      it('sets the first and last name of the person', () => {
        person = new Person('Rob Boss Man');

        expect(person.getFirstName()).toEqual('Rob');
        expect(person.getLastName()).toEqual('Boss Man');
      });
    });

    describe('setFirstName', () => {
      it('sets the first name of the person', () => {
        person.setFirstName('Rob');

        expect(person.getFirstName()).toEqual('Rob');
      });
    });

    describe('setLastName', () => {
      it('sets the last name of the person', () => {
        person.setLastName('Boss');

        expect(person.getLastName()).toEqual('Boss');
      });
    });

    describe('setFullName', () => {
      it('sets the first and last name of the person', () => {
        person.setFullName('Rob Boss Man');

        expect(person.getFirstName()).toEqual('Rob');
        expect(person.getLastName()).toEqual('Boss Man');
      });
    });

    describe('getFullName', () => {
      it('joins the first and last name of the person', () => {
        person.setFirstName('Rob');
        person.setLastName('Boss');

        expect(person.getFullName()).toEqual('Rob Boss');
      });
    });
  });
});
