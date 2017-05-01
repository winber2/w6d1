class View {
  constructor(game, $el) {
    this.game = game;
    this.setupBoard($el);
    this.bindEvents();
  }

  bindEvents() {
    $('li').on('click', (e) => {
      e.preventDefault();
      let $square = $(e.currentTarget);
      if (!this.game.isOver()) {
        this.makeMove($square);
      }

      if (this.game.isOver()) {
        if (this.game.winner() === 'x') {
          $('li').addClass('loser');
          $('li.x').removeClass('loser').addClass('winner');
        } else if (this.game.winner() === 'o') {
          $('li').addClass('loser');
          $('li.o').removeClass('loser').addClass('winner');
        } else {
          $('li').addClass('loser');
        }
        if ($('h2').length === 0) {
          $('figure').append(`<h2>You win, ${this.game.winner()}!</h2>`);
        }
      }
    });
  }

  makeMove($square) {
    let pos = $square.attr('pos').split(',');
    if (this.game.currentPlayer === 'x') {
      $square.addClass('x');
    } else {
      $square.addClass('o');
    }
    this.game.playMove(pos);
  }

  setupBoard($el) {
    let $grid = $('<ul></ul>');
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        let $square = $('<li></li>');
        $square.attr('pos', [i,j]);
        $grid.append($square);
      }
    }
    $el.append($grid);
  }
}

module.exports = View;
