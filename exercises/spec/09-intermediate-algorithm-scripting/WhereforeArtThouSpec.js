describe('Intermediate Algorithm Scripting: Wherefore art thou', () => {
  const collectionItemMatchesSource = (collectionItem, source) =>
    Object.keys(source).every((key) => collectionItem[key] === source[key]);

  const whatIsInAName = (collection, source) =>
    collection.filter((item) => collectionItemMatchesSource(item, source));

  describe('collectionItemMatchesSource', () => {
    const collectionItem = { key: 'value', anotherKey: 'another value' };

    let source;

    describe('when source is a subhash of collectionItem', () => {
      beforeEach(() => {
        source = { key: 'value' };
      });

      it('returns true', () => {
        expect(collectionItemMatchesSource(collectionItem, source)).toBeTruthy();
      });
    });

    describe('when source is not a subhash of collectionItem', () => {
      beforeEach(() => {
        source = { key: 'not value' };
      });

      it('returns false', () => {
        expect(collectionItemMatchesSource(collectionItem, source)).toBeFalsy();
      });
    });
  });

  describe('whatIsInAName', () => {
    let collection;
    let collectionItem;

    beforeEach(() => {
      collectionItem = { key: 'value' };
      collection = [collectionItem];
    });

    describe('when the source does not match the collection item', () => {
      let source;
      let expectedMatchingObjects;

      beforeEach(() => {
        source = { key: 'not value' };
        expectedMatchingObjects = [];
      });

      it('returns an empty array', () => {
        expect(whatIsInAName(collection, source)).toEqual(expectedMatchingObjects);
      });
    });

    describe('when the source matches the collection item', () => {
      let source;
      let expectedMatchingObjects;

      beforeEach(() => {
        source = collectionItem;
        expectedMatchingObjects = [collectionItem];
      });

      it('returns an empty array', () => {
        expect(whatIsInAName(collection, source)).toEqual(expectedMatchingObjects);
      });
    });
  });
});
