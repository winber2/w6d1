const HanoiGame = require('./../../solution/game.js');
const HanoiView = require('./toh-view.js');

$( () => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});
