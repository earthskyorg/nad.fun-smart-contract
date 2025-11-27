import { ethers } from "hardhat";

async function main() {
  const routerAddress = process.env.UNISWAP_ROUTER_ADDRESS;

  if (!routerAddress) {
    throw new Error(
      "Missing UNISWAP_ROUTER_ADDRESS environment variable. Add it to .env or pass it inline."
    );
  }

  console.log(`\n🚀 Deploying PumpCloneFactory with router ${routerAddress} ...`);

  const Factory = await ethers.getContractFactory("PumpCloneFactory");
  const factory = await Factory.deploy(routerAddress);
  await factory.waitForDeployment();

  const factoryAddress = await factory.getAddress();
  console.log(`✅ PumpCloneFactory deployed at ${factoryAddress}`);
  console.log("   Remember to update your frontend/configs with this address.\n");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


