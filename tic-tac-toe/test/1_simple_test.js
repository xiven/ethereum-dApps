var TicTacToe = artifacts.require("TicTacToe");

contract("TicTacToe", (accounts) => {
  it("should have an empty board at the beginning", () => {
    TicTacToe.new({from: accounts[0], value: web3.toWei(0.1, "ether")})
      .then((instance) => {
        return instance.getBoard.call();
      })
      .then((board) => {
        assert.equal(board[0][0], 0, "The first row/column should be empty");
      })
      .catch(err => {
        console.log(err);
      })
  });
});