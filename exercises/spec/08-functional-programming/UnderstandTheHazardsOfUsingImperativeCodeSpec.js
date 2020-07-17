describe('Functional Programming: Understand the Hazards of Using Imperative Code', () => {
  describe('Window', () => {
    /* eslint-disable func-names */

    // tabs is an array of titles of each site open within the window
    const Window = function (tabs) {
      this.tabs = tabs; // We keep a record of the array inside the object
    };

    // When you join two windows into one window
    Window.prototype.join = function (otherWindow) {
      this.tabs = this.tabs.concat(otherWindow.tabs);
      return this;
    };

    // When you open a new tab at the end
    Window.prototype.tabOpen = function (tab) {
      this.tabs.push('new tab'); // Let's open a new tab for now
      return this;
    };

    // When you close a tab
    Window.prototype.tabClose = function (index) {
      // Only change code below this line

      const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
      const tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab

      this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

      // Only change code above this line

      return this;
    };

    /* eslint-enable func-names */

    describe('.tabClose', () => {
      it('closes the tab in the index', () => {
        const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);

        videoWindow.tabClose(2);

        expect(videoWindow.tabs).toEqual(['Netflix', 'YouTube', 'Vine']);
      });
    });
  });
});
