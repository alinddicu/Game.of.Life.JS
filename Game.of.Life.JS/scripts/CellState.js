var GameOfLife = GameOfLife || {};

GameOfLife.CellState = function() {
  self = this;

  self.Alive = 1;
  self.Dead = 2;
};

var CellState = new GameOfLife.CellState();
