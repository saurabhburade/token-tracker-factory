const TokensTracker = artifacts.require("TokensTracker");

module.exports = function (deployer) {
  deployer.deploy(TokensTracker);
};
