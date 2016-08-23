class View {
  constructor(game, $el) {
    this.game = game;
    let board = this.setupBoard();
    $el.append(board)
    this.bindEvents();
  }

  bindEvents() {
    var that = this;
    $(".cell").each(function(index) {
      $(this).on("click", e => {
        var $cell = $(e.currentTarget);
        that.makeMove($cell);
        if (that.game.isOver()) {
          that.drawWinningBoard(that.game.board.winner());
        };
      });
    })
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
    try {
      var currentPlayer = this.game.currentPlayer;
      this.game.playMove($cell.data("pos"));
      $cell.text(currentPlayer);
      $cell.addClass("clicked");
    }
    catch(err) {
      alert(err.msg);
    }
  }

  setupBoard() {
    var $board = $("<ul class='board'></ul>");
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        var $cell = $("<li class='cell'></li>");
        $cell.data("pos", [i,j]);
        $board.append($cell);
      }
    }

    return $board;

  }
}

module.exports = View;
