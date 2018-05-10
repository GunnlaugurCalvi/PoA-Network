//const Web3 = require("web3.js");
const TruffleConfig = require("../truffle");

const Migrations = artifacts.require("./Migrations.sol");
const Inbox = artifacts.require("./Inbox.sol");



module.exports = function(deployer, network, addresses) {
  const config = TruffleConfig.networks[network];

  /*if(process.env.ACCOUNT_PASSWORD) {
    const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545')); 
//    const web3 = new Web3(new Web3.providers.HttpProvider('http://' + config.host + ':' + config.port));
    
    console.log('>> Unlocking account ' + config.from);
    web3.personal.unlockAccount(config.from, process.env.ACCOUNT_PASSWORD, 36000);  
  }

  console.log('>> Deploying migration and Inbox');*/
  deployer.deploy(Migrations);
  deployer.deploy(Inbox);
};
