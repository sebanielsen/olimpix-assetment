// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PatchedToken {
    // Using uint256 is safer, and Solidity >=0.8.0 automatically reverts on overflow.
    uint256 public MAX_SUPPLY = 1000; 
    uint256 public currentSupply = 0;
    mapping(address => uint256) public balances;

    // --- PATCHED/SAFE FUNCTION ---
    function mint(uint256 amount) public {
        // Safe addition: Solidity 0.8.0+ automatically reverts on overflow.
        uint256 newSupply = currentSupply + amount; 
        
        // Business logic check for the intended supply cap
        if (newSupply > MAX_SUPPLY) {
            revert("Supply cap exceeded");
        }
        
        currentSupply = newSupply;
        balances[msg.sender] += amount;
    }
    
    function getBalance(address _user) public view returns (uint256) {
        return balances[_user];
    }
}