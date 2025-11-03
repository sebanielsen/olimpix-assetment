// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VulnerableToken {
    // We use uint8 for easy overflow demonstration (max 255)
    uint8 public max_supply = 200; 
    uint8 public current_supply = 0;

    // --- VULNERABLE FUNCTION ---
    function mint(uint8 amount) public {
        // VULNERABLE LINE: In older Solidity or non-EVM languages, this addition 
        // would overflow and wrap around if (current_supply + amount) > 255.
        // Even in modern Solidity, this highlights the logic error if unchecked math was used.
        uint8 new_supply = current_supply + amount;

        // The check against max_supply fails to catch the overflow if new_supply wrapped to 0.
        if (new_supply <= max_supply) {
            current_supply = new_supply;
            // logic to actually mint tokens...
        } else {
            revert("Exceeds max supply");
        }
    }
}