const Migrations = artifacts.require("./Loyalty.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
