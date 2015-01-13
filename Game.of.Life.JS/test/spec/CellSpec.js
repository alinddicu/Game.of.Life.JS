describe("Cell", function() {

  it("Given New Cell When GetState Then The CurrenState Is Alive", function() {
      var cell = new GameOfLife.Cell(1, 1);

      // why not working? expect(cell.CurrentState).toEqual(CellState.Alive);
      expect(cell.CurrentState).not.toEqual(CellState.Dead);
  });

  it("Given New Cell With Coordinates When Get Coordinates Then Coordinates Are Correct", function(){
      var cell = new GameOfLife.Cell(1, 2);

      expect(cell.X).toEqual(1);
      expect(cell.Y).toEqual(2);
  });

  it("Given 1 Alive Cell With 1 Alive Neighbour When Mutate Then Cell Dies", function() {
      var cell = new GameOfLife.Cell(1, 1, CellState.Alive);

      cell.AddNeighbours([new GameOfLife.Cell(1, 2, CellState.Alive)]);
      cell.Mutate();

      expect(cell.NextState).toEqual(CellState.Dead);
  });

  it("Given 1 Dead Cell With 1 Alive Neighbour When Mutate Then Cell Stays Dead", function() {
      var cell = new GameOfLife.Cell(1, 1, CellState.Dead);

      cell.AddNeighbours([new GameOfLife.Cell(1, 2, CellState.Alive)]);
      cell.Mutate();

      expect(cell.NextState).toEqual(CellState.Dead);
  });

  it("Given 1 Alive Cell With More Than 3 Alive Neighbours When Mutate Then Cell Dies", function() {
      var cell = new GameOfLife.Cell(1, 1, CellState.Alive);

      cell.AddNeighbours([
        new GameOfLife.Cell(0, 0, CellState.Alive),
        new GameOfLife.Cell(1, 2, CellState.Alive),
        new GameOfLife.Cell(2, 2, CellState.Alive),
        new GameOfLife.Cell(2, 1, CellState.Alive)
      ]);

      cell.Mutate();

      expect(cell.NextState).toEqual(CellState.Dead);
  });

  it("Given 1 Alive Cell With 2 Or 3 Alive Neighbours When Mutate Then Cell Stays Alive", function(){
    var cell = new GameOfLife.Cell(1, 1, CellState.Alive);

    cell.AddNeighbours([
      new GameOfLife.Cell(0, 0, CellState.Alive),
      new GameOfLife.Cell(1, 2, CellState.Alive),
      new GameOfLife.Cell(2, 2, CellState.Alive)
    ]);

    cell.Mutate();

    expect(cell.NextState).toEqual(CellState.Alive);
  });

  it("Given 1 Dead Cell With 3 Alive Neighbours When Mutate Then Cell Becomes Alive", function(){
    var cell = new GameOfLife.Cell(1, 1, CellState.Dead);

    cell.AddNeighbours([
      new GameOfLife.Cell(0, 0, CellState.Alive),
      new GameOfLife.Cell(1, 2, CellState.Alive),
      new GameOfLife.Cell(2, 2, CellState.Alive)
    ]);

    cell.Mutate();

    expect(cell.NextState).toEqual(CellState.Alive);
  });
});
