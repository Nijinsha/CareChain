module.exports = {
  networks: {
    development: {
      host:  'http://localhost',
      port: 9545,
      network_id: "*" // Match any network id
    }
  }, live: {
    host: 'http://localhost', // Random IP for example purposes (do not use)
    port: 8545,
    network_id: "*",        // Ethereum public network
    // optional config values:
    // gas
    // gasPrice
    // from - default address to use for any transaction Truffle makes during migrations
    // provider - web3 provider instance Truffle should use to talk to the Ethereum network.
    //          - if specified, host and port are ignored.
  }
};