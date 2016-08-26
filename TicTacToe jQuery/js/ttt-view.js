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

  drawWinningBoard(winner) {
    //iterate over all cells, if they have text equal to winner, add class winner
    //which has background green and text-color white; otherwise, background white,
    //textcolor red
    var $cells = $(".cell");
    $cells.removeClass("clicked");
    $cells.each(function(index) {
      var $cell = $(this);
      if ($cell.text() === winner) {
        $cell.addClass("winner");
      } else {
        $cell.addClass("loser");
      }
    });
    var $winningMessage = $('<h1 id="winning-message"></h1>')
    $winningMessage.text("You win " + winner + "!");
    $('body').append($winningMessage);
  }

  makeMove($cell) {
    const currentPlayer = this.game.currentPlayer;
    const pos = $cell.data("pos");

    try {
      this.game.playMove(pos);
      $cell.text(currentPlayer);
      $cell.addClass("clicked");
    }
    catch(err) {
      alert(err.msg);
      return
    }
  }

  makeMove($square) {
      const pos = $square.data("pos");
      const currentPlayer = this.game.currentPlayer;

      try {
        this.game.playMove(pos);
      } catch (e) {
        alert("Invalid move! Try again.");
        return;
      }

      $square.addClass(currentPlayer);

      if (this.game.isOver()) {
        // cleanup click handlers.
        this.$el.off("click");
        this.$el.addClass("game-over");

        const winner = this.game.winner();
        const $figcaption = $("<figcaption>");

        if (winner) {
          this.$el.addClass(`winner-${winner}`);
          $figcaption.html(`You win, ${winner}!`);
        } else {
          $figcaption.html("It's a draw!");
        }

        this.$el.append($figcaption);
      }
    }

  setupBoard() {
    var $ul = $("<ul>");
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
