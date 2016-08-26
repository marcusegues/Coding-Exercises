class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", event => {
      const $cell = $(event.currentTarget);
      this.makeMove($cell);
    });
  }

  makeMove($cell) {
    const currentPlayer = this.game.currentPlayer;
    const pos = $cell.data("pos");

    try {
      this.game.playMove(pos);
    }
    catch(err) {
      alert(err.msg);
      return
    }

    $cell.addClass(currentPlayer);

    if (this.game.isOver()) {
      // cleanup click handlers
      this.$el.off("click");
      this.$el.addClass("game-over");

      const winner = this.game.winner();
      const $figcaption = $("<figcaption>");

      if (winner) {
        this.$el.addClass(`winner-${winner}`);
        $figcaption.html(`You win, ${winner}`);
      } else {
        $figcaption.html("It's a draw!");
      }

      this.$el.append($figcaption);
    }
  }

  setupBoard() {
    var $ul = $("<ul>");
    $ul.addClass("group");
    for (var rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (var colIdx = 0; colIdx < 3; colIdx++) {
        var $li = $("<li>");
        $li.data("pos", [rowIdx,colIdx]);
        $ul.append($li);
      }
    }

    this.$el.append($ul)
  }
}

module.exports = View;
