module.exports = {
  contracts_build_directory: "../src/contracts",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "7722",
      //npx ganache-cli --chainId 7722 --networkId 7722
    },
  },

  compilers: {
    solc: {
      version: "0.8.17",
    },
  },
};
