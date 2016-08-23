const View = require('./ttt-view.js');
const Game = require('./../../TicTacToe/game');

$( () => {
  var $figure = $('.ttt');
  var game = new Game;
  var view = new View(game, $figure);
});
