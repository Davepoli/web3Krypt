// hardhat.config.js
// https://eth-ropsten.alchemyapi.io/v2/U1HPd9DUy_W2f5uNI8mjEFYyYxTGrJ-z

require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.1",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/U1HPd9DUy_W2f5uNI8mjEFYyYxTGrJ-z",
      accounts: [
        "69ac64f671e0e96c0d9759df01171b07a96a0dce9714fa8798e33c0a5190c16a",
      ],
    },
  },
};
