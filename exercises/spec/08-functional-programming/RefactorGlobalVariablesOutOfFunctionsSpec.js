describe('Functional Programming: Refactor Global Variables Out of Functions', () => {
  describe('add', () => {
    function add(bookList, bookName) {
      return bookList.concat([bookName]);
    }

    it('does not modify the book list', () => {
      const bookList = [];
      const bookName = 'Some book name';

      const result = add(bookList, bookName);

      expect(result).toEqual([bookName]);
      expect(bookList).toEqual([]);
    });
  });

  describe('remove', () => {
    function remove(bookList, bookName) {
      const bookIndex = bookList.indexOf(bookName);

      if (bookIndex < 0) { return null; }

      return bookList
        .slice(0, bookIndex)
        .concat(bookList.slice(bookIndex + 1, bookIndex.length));
    }

    it('does not modify the book list', () => {
      const bookName = 'Some book name';
      const bookList = [bookName];
      const result = remove(bookList, bookName);

      expect(result).toEqual([]);
      expect(bookList).toEqual([bookName]);
    });
  });
});
