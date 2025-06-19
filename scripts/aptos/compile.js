require("dotenv").config();
const cli = require("@aptos-labs/ts-sdk/dist/common/cli/index.js");

async function compile() {
  const move = new cli.Move();

  await move.compile({
    packageDirectoryPath: "contracts/aptos",
    namedAddresses: {
      // Compile module with account address
      cifarm: process.env.CIFARM_ACCOUNT_ADDRESS,
      dev: process.env.DEV_ACCOUNT_ADDRESS,
      default_admin: process.env.DEFAULT_ADMIN_ACCOUNT_ADDRESS,
    },
  });
}
compile();
