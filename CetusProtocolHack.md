## 🔎 Evidence: The $223M Cetus Protocol Hack

This project addresses a security vulnerability related to the **$223 million Cetus Protocol exploit** that occurred on **May 22, 2025**.

### 🔗 Source Article (Full Report)
* **Title:** [Hack Track: How a Shared Library Bug Triggered the $223M Cetus Hack](https://www.merklescience.com/blog/hack-track-how-a-shared-library-bug-triggered-the-223m-cetus-hack)
* **Author:** Merkle Science
* **Published:** May 26, 2025

### 💥 Summary of the Root Cause

The attack was highly unusual as it did **not** exploit logic in Cetus's own contracts, but rather a vulnerability in a **third-party library**.

| Detail | Description |
| :--- | :--- |
| **Vulnerable Library** | `integer-mate` (a utility library for signed integer math in Move) |
| **Type of Bug** | Improper handling of **integer rounding** within the library. |
| **Exploit Mechanism** | Attackers leveraged edge cases in the rounding function to deposit a small amount of "spoof tokens" and be incorrectly credited with a significantly larger share. This allowed them to manipulate price curves and withdraw legitimate assets (like SUI and USDC) far exceeding their deposit. |
| **Impact** | Loss of approximately **$223 million** in under 15 minutes, affecting over 200 liquidity positions. |

### ✅ Mitigation & Response

***Protocol Action:** Cetus patched the affected contracts and upgraded the vulnerable `integer-mate` package.
***Ecosystem Response:** The Sui validator community chose to ignore transactions from known attacker wallets, which successfully helped contain approximately **$160 million** in stolen assets on-chain.
