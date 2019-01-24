const TicTacToe = artifacts.require("TicTacToe");

contract("TicTacToe", (accounts) => {
  it("should be possible to play with draw", () => {
    let ticTacToeInstance;
    let playerOne = accounts[0];
    let playerTwo = accounts[1];
    return TicTacToe.new({from: playerOne, value: web3.toWei(0.1, "ether")}).then((instance) => {
      ticTacToeInstance = instance;
      return ticTacToeInstance.joinGame({from:playerTwo, value:web3.toWei(0.1, "ether")});
    }).then(txResult => {
      return ticTacToeInstance.setStone(0,0,{from: txResult.logs[1].args.player});
    }).then(txResult => {
      return ticTacToeInstance.setStone(1,1,{from: txResult.logs[0].args.player});
    }).then(txResult => {
      return ticTacToeInstance.setStone(0,1,{from: txResult.logs[0].args.player});
    }).then(txResult => {
      return ticTacToeInstance.setStone(0,2,{from: txResult.logs[0].args.player});
    }).then(txResult => {
      return ticTacToeInstance.setStone(2,0,{from: txResult.logs[0].args.player});
    }).then(txResult => {
      return ticTacToeInstance.setStone(1,0,{from: txResult.logs[0].args.player});
    }).then(txResult => {
      return ticTacToeInstance.setStone(1,2,{from: txResult.logs[0].args.player});
    }).then(txResult => {
      return ticTacToeInstance.setStone(2,1,{from: txResult.logs[0].args.player});
    }).then(txResult => {
      return ticTacToeInstance.setStone(2,2,{from: txResult.logs[0].args.player});
    }).then(txResult => {
      assert(txResult.logs[0].event,"GameOverWithDraw", "The game was not won.");
    }).catch(err => {
      console.log(err);
    })
  })
});