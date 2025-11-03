const Web3 = require('web3');
// const fs = require('fs'); // Uncomment if loading artifacts from a file

// 1. CONFIGURATION
const WEB3_PROVIDER_URL = 'http://127.0.0.1:8545';
const DEPLOYER_PRIVATE_KEY = 'YOUR_DEPLOYER_PRIVATE_KEY_HERE'; 

// 2. CONTRACT ARTIFACTS (***MUST BE UPDATED AFTER COMPILATION***)
const CONTRACT_ABI = [ /* ... Insert PatchedToken ABI Array ... */ ];
const CONTRACT_BYTECODE = '0x' + '... Insert PatchedToken Bytecode String ...';

async function main() {
    const web3 = new Web3(new Web3.providers.HttpProvider(WEB3_PROVIDER_URL));
    
    const account = web3.eth.accounts.wallet.add(DEPLOYER_PRIVATE_KEY);
    const deployerAddress = account.address;
    
    console.log(`Deployer Account: ${deployerAddress}`);
    
    // --- STEP A: DEPLOY THE CONTRACT ---
    const SafeTokenContract = new web3.eth.Contract(CONTRACT_ABI);

    try {
        const deployedContract = await SafeTokenContract.deploy({
            data: CONTRACT_BYTECODE,
        })
        .send({
            from: deployerAddress,
            gas: 5000000,
        });

        const contractAddress = deployedContract.options.address;
        console.log(`Contract deployed at address: ${contractAddress}`);

        // --- STEP B: EXECUTE A FUNCTION (Mint) ---
        const amountToMint = web3.utils.toBN('50');

        const mintTransaction = deployedContract.methods.mint(amountToMint);

        await mintTransaction.send({
            from: deployerAddress,
            gas: await mintTransaction.estimateGas({ from: deployerAddress }),
        });

        console.log("Mint operation successful.");

        // Function to read balance
        const balance = await deployedContract.methods.getBalance(deployerAddress).call();
        
        console.log(`Current Balance for ${deployerAddress}: ${balance.toString()}`);
        
    } catch (error) {
        console.error("Deployment or execution failed:", error.message);
    }
}

main();