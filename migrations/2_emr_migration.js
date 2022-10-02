const emrMigrations = artifacts.require("emr");

module.exports = function (deployer) {
  deployer.deploy(emrMigrations);
};
