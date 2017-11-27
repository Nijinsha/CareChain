// Import libraries
var Web3            = require('web3'),
contract        = require("truffle-contract"),
path            = require('path')
MyContractJSON  = require(path.join(__dirname, '../build/contracts/CareRecord.json'));

// Setup RPC connection   
var provider    = new Web3.providers.HttpProvider("http://localhost:9545");


// Read JSON and attach RPC connection (Provider)
var MyContract = contract(MyContractJSON);
MyContract.setProvider(provider);

// Use Truffle as usual
MyContract.deployed().then(function(instance) {
return instance.createPatient.call(123, {from: '0x0d1d4e623d10f9fba5db95830f7d3839406c6af2'})

}).then(function(result) {
console.log(result);

}, function(error) {
console.log(error);
}); 