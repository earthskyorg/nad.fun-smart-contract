// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

interface IUniswapV2Router02 {
    function addLiquidityETH(
        address token,
        uint256 amountTokenDesired,
        uint256 amountTokenMin,
        uint256 amountETHMin,
        address to,
        uint256 deadline
    )
        external
        payable
        returns (
            uint256 amountToken,
            uint256 amountETH,
            uint256 liquidity
        );

    // solhint-disable-next-line func-name-mixedcase
    function WETH() external view returns (address);
}

