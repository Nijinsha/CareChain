var CareRecord = artifacts.require("./CareRecord.sol");

module.exports = function(deployer) {
  deployer.deploy(CareRecord);
};