const View = require('./ttt-view.js');
const Game = require('./../../solution/game.js');

$( () => {
  const game = new Game();
  const $el = $('figure');
  const view = new View(game, $el);
});
