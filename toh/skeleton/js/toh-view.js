class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.setupTowers($el);
    this.render();
    this.clickTower();
  }

  setupTowers($el) {
    for (let i = 0; i < 3; i++) {
      let $pile = $('<ul></ul>');
      $pile.attr('pile-id', i);

      $el.append($pile);
    }
  }

  clickTower() {
    let start = undefined;
    let $first = undefined;
    let isFinished = false;

    $('ul').on('click', (e) =>{
      e.preventDefault();

      if (isFinished) return;

      if (start === undefined) {
        $first = $(e.currentTarget);
        start = $first.attr("pile-id");
        $first.toggleClass('selected');

      } else {
        let $second = $(e.currentTarget);
        let end = $second.attr("pile-id");
        $first.toggleClass('selected');
        this.game.move(start,end);
        start = undefined;
        this.render();

        if (this.game.isWon()) {
          isFinished = true;
          $('body').append('<h2>Congratulations! You win!</h2>');
          $('ul').addClass('done');
          $('li').addClass('done');
        }
      }
    });

  }

  render() {
    $('ul').empty();
    this.game.towers.forEach((tower, idx) => {
      tower.forEach((index) => {
        let $disc = $('<li></li>');
        $disc.attr('disc-id', index);
        $('ul').eq(idx).append($disc);
      });
    });
  }

}

module.exports = HanoiView;
