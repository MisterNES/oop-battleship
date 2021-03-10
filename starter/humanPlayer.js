const readline = require("readline");


class HumanPlayer {
  constructor() {
    // TODO: Create a new readline interface and store is as an instance
    // variable (this.rl). Remember to require the built-in node module,
    // 'readline'

    this.rl = readline.createInterface(process.stdin, process.stdout);
  }

  getMove(processMove) {
    // TODO: Ask the user for their move and process the answer using the rl
    // interface.Invoke the callback function (processMove), passing in
    // the given answer in the form of an array representing [row, col]

    this.rl.question("Choose a coordinate to hit", (answer) => {
      const [row, col] = answer.split(',');

      processMove([row, col]);
    })
  }

  processGameOver(isWon) {
    // TODO: Display a different message depending on if the player won or lost
    // the game. Close the rl interface.

    if (isWon) {
      console.log(`Congrats! You did it in ${turns} turns!`);
    } else {
      console.log(`HAHA YOU LOSE.`)
    }
    this.rl.close();
  }
}

module.exports = HumanPlayer;
