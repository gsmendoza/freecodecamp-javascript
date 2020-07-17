beforeEach(() => {
  jasmine.addMatchers({
    toBePlaying() {
      return {
        compare(actual, expected) {
          const player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying,
          };
        },
      };
    },
  });
});
