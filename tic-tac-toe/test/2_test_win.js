var TicTacToe = artifacts.require("TicTacToe");

contract("TicTacToe", (accounts) => {
  it("should be possible to win", () => {
    let ticTacToeInstance;
    let playerOne = accounts[0];
    let playerTwo = accounts[1];
    TicTacToe.new({from: playerOne, value: web3.toWei(0.1, "ether")})
      .then((instance) => {
        ticTacToeInstance = instance;
        return ticTacToeInstance.joinGame({from: playerTwo, value: web3.toWei(0.1, "ether")});
      })
      .then((txResult) => {
        return ticTacToeInstance.setStone(0,0,{from: txResult.logs[1].args.player});
      })
      .then(txResult => {
        return ticTacToeInstance.setStone(0,1,{from: txResult.logs[0].args.player});
      })
      .then(txResult => {
        return ticTacToeInstance.setStone(1,0,{from: txResult.logs[0].args.player});
      })
      .then(txResult => {
        return ticTacToeInstance.setStone(1,1,{from: txResult.logs[0].args.player});
      })
      .then(txResult => {
        return ticTacToeInstance.setStone(2,0,{from: txResult.logs[0].args.player});
      })
      .then(txResult => {
        assert(txResult.logs[0].event, "GameOverWithWin", "One of the players must have won the game");
      })
      .catch(err => {
        console.log(err);
      })
  });
});