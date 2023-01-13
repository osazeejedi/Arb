const hre = require("hardhat");

async function main() {
  
  const Weth = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
  const Arb = await hre.ethers.getContractFactory("FlashBot");
  const arb = await Arb.deploy(Weth);

  await arb.deployed();

  console.log(
    `Arbitrage contract deployed to ${arb.address}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});