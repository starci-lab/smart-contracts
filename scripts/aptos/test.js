require("dotenv").config();

const cli = require("@aptos-labs/ts-sdk/dist/common/cli/index.js");

async function test() {
  const move = new cli.Move();

  await move.test({
    packageDirectoryPath: "contracts/aptos",
    namedAddresses: {
      test_coin: "0x16",
      zero: "0000000000000000000000000000000000000000000000000000000000000000",
      cifarm: process.env.CIFARM_ACCOUNT_ADDRESS,
      dev: process.env.DEV_ACCOUNT_ADDRESS,
      default_admin: process.env.DEFAULT_ADMIN_ACCOUNT_ADDRESS,
    },
  });
}
test();
