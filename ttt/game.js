var Board = require("./board");

function Game() {
  this.board = new Board();
  this.currentMark = "X";
}

// Game.prototype.run = function (completionCallback) {
//   this.board.print();
//   if (this.board.gameOver() || this.board.tieGame()) {
//     this.endGame(completionCallback);
//   } else {
//     this.promptMove(this.handleMove.bind(this, completionCallback));
//   }
// };

Game.prototype.handleMove = function(move) {
  if (this.board.validMove(move)) {
    this.board.placeMark(move, this.currentMark);
    this.switchMark();
  } else {
    console.log("Invalid move!");
  }
};

Game.prototype.endGame = function (completionCallback) {
  if (this.board.gameOver()) {
    console.log("YOU WINNER, YOU!");
  } else {
    console.log("TIE GAME!");
  }
  completionCallback();
};

Game.prototype.switchMark = function () {
  this.currentMark = this.currentMark === "X" ? "O" : "X";
};

Game.prototype.parseInput = function(input) {
  return input.split(" ").map( function(el) {
    return parseInt(el);
  });
};

// Game.prototype.promptMove = function (callback) {
//   var message = "Player, " + this.currentMark + ", where do you want to move?";
//   this.reader.question( message, function (input) {
//     var move = input.split(" ").map( function(el) {
//       return parseInt(el);
//     } );
//
//     callback(move);
//   });
// };

module.exports = Game;
