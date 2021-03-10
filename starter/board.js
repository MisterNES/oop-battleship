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

    // this.uiGrid = grid
    // console.log(this.uiGrid);
    let counter = this.numShips;

    while(counter > 0) {
      let randomCol = Math.floor(Math.random() * Math.floor(this.numCols));
      let randomRow = Math.floor(Math.random() * Math.floor(this.numRows));

      if (grid[randomRow][randomCol] === null) {
        grid[randomRow][randomCol] = 's';
        counter--;
      }
    }
    return grid;
  }

  display() {
    // TODO: Print the game board with marks on any spaces that have been fired
    // upon. Be sure not to display the unhit ships to the user! Hint: you might
    // be able to use console.table()
    let displayGrid = this.grid.map(row => {
      return row.map(col => {
        if (col === null || col === 's') {
          return '~'
        } else {
          return col
        }
      })
    })

    console.table(displayGrid);
  }

  count() {
    // TODO: Return the number of valid targets (ships) remaining.

    let remShips = 0

    for (let i = 0; i < this.numRows; i++) {
      for (let j = 0; j < this.numCols; j++) {
        if (grid[i][j] === 's') {
          remShips++;
        }
      }
    }
    return remShips;
  }

  isValidMove(pos) {
    // TODO: Take in an attack position (in the form of an array [row, col]) and
    // return true if the position is a valid move.
    let splitPos = pos.split(',')

    if (
      splitPos[0] > this.numRows ||
      splitPos[1] > this.numCols ||
      splitPos[0] < 0 ||
      splitPos[1] < 0 ||
      this.grid[splitPos[0]][splitPos[1]] === 'h' ||
      this.grid[splitPos[0]][splitPos[1]] === 'x'
      ) {
      return false
    }
    return true
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

testBoard.display();


module.exports = Board;
