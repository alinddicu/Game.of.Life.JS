describe("Cell", function() {

  it("Given New Cell When GetState Then The CurrenState Is Alive", function() {
      var cell = new GameOfLife.Cell(1, 1);

      expect(cell.CurrentState).toEqual(CellState.Alive);
      expect(cell.CurrentState).not.toEqual(CellState.Dead);
  });

  it("Given 1 Alive Cell With 1Alive Neighbour When Mutate Then Cell Dies", function() {
      var cell = new GameOfLife.Cell(1, 1, CellState.Alive);

      cell.AddNeighbours([new GameOfLife.Cell(1, 2, CellState.Alive)]);
      cell.Mutate();

      console.log(cell.NextState);
      expect(cell.NextState).toEqual(CellState.Dead);
  });
});
