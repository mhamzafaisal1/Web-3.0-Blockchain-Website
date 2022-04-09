require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/656MxImJw4YIkCohTGFTJuoWdWRT4KZ9',
      accounts: ['ff43a07242e7b905229dba443411c19ccecda6a807dce44c5a44fcd3556b02f1'],
    },
  },
};