var GameOfLife = GameOfLife || {};

GameOfLife.Cell = function(x, y, cellState) {
    var self = this;

    self.X = x;
    self.Y = y;
    self.CurrentState = cellState;
    self.NextState = null;
    self.Neighbours = [];

    self.AddNeighbours = function (cells) {
      if(self.Neighbours.length > 8){
        throw "The cell can't have more than 8 neighbours";
      }

      _.each(cells, function(cell){

        self.Neighbours = _.reject(self.Neighbours, function(neighbour) {
          return neighbour.X == cell.X && neighbour.Y == cell.Y;
        });

        self.Neighbours.push(cell);
      });
    };

    self.Mutate = function() {
        self.NextState = self.CurrentState;
        var aliveNeighboursCount = _.filter(self.Neighbours, function(neighbour){ return neighbour.CurrentState == CellState.Alive;}).length;
        if (aliveNeighboursCount < 2 || aliveNeighboursCount > 3) {
            self.NextState = CellState.Dead;
        } else if (self.CurrentState == CellState.Dead && aliveNeighboursCount == 3) {
            self.NextState = CellState.Alive;
        }
    };
};
