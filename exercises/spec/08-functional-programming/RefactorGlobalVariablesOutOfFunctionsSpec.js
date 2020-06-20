describe("Functional Programming: Refactor Global Variables Out of Functions", function() {
  describe("add", function() {
    let bookList = [];

    function add(bookList, bookName) {
      return bookList.concat([bookName]);
    }

    it("does not modify the book list", function() {
      let bookName = 'Some book name';

      let result = add(bookList, bookName);

      expect(result).toEqual([bookName])
      expect(bookList).toEqual([]);
    })
  });

  describe("remove", function() {
    let bookName = 'Some book name';
    let bookList = [bookName];

    function remove (bookList, bookName) {
      var book_index = bookList.indexOf(bookName);

      if (book_index >= 0) {
        return bookList
          .slice(0, book_index)
          .concat(bookList.slice(book_index + 1, book_index.length));
      }
    }

    it("does not modify the book list", function() {
      let result = remove(bookList, bookName);

      console.log(result);

      expect(result).toEqual([])
      expect(bookList).toEqual([bookName]);
    });
  });
});
