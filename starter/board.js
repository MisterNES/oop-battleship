class Board {
  constructor(numRows, numCols, numShips) {
    // TODO: Set up constructor that sets the numRos, numCols, and numShips.
    // TODO: Set this.grid equal to the return value of the instance method
    // populateGrid().
    this.numRows = numRows;
    this.numCols = numCols;
    this.numShips = numShips;
    this.grid = this.populateGrid();
  }

  populateGrid() {
    // TODO: Using the instance variables numRows, numCols, and numShips, return
    // a 2D array representing the state of the board.
    let grid = [];
    for (let i = 0; i < this.numRows; i++){
      grid.push([]);
      for (let j = 0; j < this.numCols; j++){
        grid[i].push(null);
      }
    }

    // let uiGrid = grid

    for (let k = 0; k < this.numShips; k++){
      let randomCol = Math.floor(Math.random() * Math.floor(this.numCols));
      let randomRow = Math.floor(Math.random() * Math.floor(this.numRows));

      grid[randomRow][randomCol] = 's'
    }
    return grid
  }

  display() {
    // TODO: Print the game board with marks on any spaces that have been fired
    // upon. Be sure not to display the unhit ships to the user! Hint: you might
    // be able to use console.table()
    console.table(uiGrid);
  }

  count() {
    // TODO: Return the number of valid targets (ships) remaining.
  }

  isValidMove(pos) {
    // TODO: Take in an attack position (in the form of an array [row, col]) and
    // return true if the position is a valid move.
  }

  isGameOver() {
    // TODO: Return true if the game is over (when all ships are hit).
  }

  attack() {
    // TODO: Take in an attack position in the form of an array, [row, col], as
    // a parameter. Update this.grid depending on if the position is an empty
    // space or a damaged ship.
  }
}

let testBoard = new Board(3,4,2);

// console.log(testBoard.populateGrid().uiGrid)


module.exports = Board;
