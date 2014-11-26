describe("Cell", function() {
  
  it("GivenNewCellWhenGetStateThenTheCurrenStateIsAlive", function() {
    var cell = new GameOfLife.Cell();
	
    expect(cell.CurrentState).toEqual(CellState.Alive);
	expect(cell.CurrentState).not.toEqual(CellState.Dead);
  });
});
