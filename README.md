#this arbitrage contract can be used to arbitrage between Uniswap V2 like AMMs.


The contract has a function getProfit(address pool1, address pool2), which can be used to calculate the maximum profit between two pairs(denominated in base token).

The bot need to call getProfit() to get the possible profit between token pairs. Once it is profitable, bot calls flashArbitrage(pool1, pool2) to do the arbitrage. The profit will leaves in the contract address.

Contract owner can call withdraw() to withdraw the profit.

