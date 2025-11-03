# olimpix-assetment

# 🚀 SafeToken Project Setup and Testing Guide

This project demonstrates a basic structure for developing, deploying, and testing a smart contract using **Web3.js**, **Node.js**, **Mocha**, and **Chai**. It uses the **SafeToken** contract, which includes essential checks to prevent the **integer overflow vulnerability** seen in real-world exploits like the Cetus Protocol hack.

## 📦 1. Prerequisites

Before starting, ensure you have the following installed:

* **Node.js & npm:** Download and install from [nodejs.org](https://nodejs.org/).
* **A Local EVM Blockchain:** **Ganache** (recommended for simplicity) or **Hardhat** running a local network.

## 🛠️ 2. Project Setup

Follow these steps to initialize your project and install necessary dependencies.

### Step 2.1: Initialize Project

# Create a new directory and navigate into it
```bash
mkdir safetoken-project
cd safetoken-project
```

# Initialize a new Node.js project
```bash
npm init -y
```
### Part 2: Section 3 (Deployment and Execution)

## 🏃 3. Deployment and Execution

This section details how to use `deployAndRun.js` to deploy and interact with the `SafeToken` contract on your local network.

### 3.1: Start Your Local Blockchain

Open a separate terminal and start your local EVM network (e.g., Ganache or Hardhat).

> ⚠️ **Provider URL:** The deployment script uses `http://127.0.0.1:8545`. Ensure your local blockchain is running on this address, or update the `WEB3_PROVIDER_URL` constant in `deployAndRun.js`.

### 3.2: Prepare Contract Artifacts

You must compile your `SafeToken.sol` contract and then **update the `contract_data` object** within `deployAndRun.js` with the correct **ABI** and **Bytecode**.

### 3.3: Run the Deployment Script

Execute the script using Node.js:

```bash
node deployAndRun.js
```
### Part 3: Section 4 (Unit Testing)

## 🧪 4. Unit Testing with Mocha and Chai

Unit tests are crucial for verifying that the contract's logic is sound and that security patches (like overflow prevention) are working as intended.

### 4.1: Update `package.json`

Add the `test` script to the `"scripts"` section of your `package.json` file to tell npm how to run your tests:

```json
// package.json

"scripts": {
    "test": "mocha SafeToken.test.js"
},
