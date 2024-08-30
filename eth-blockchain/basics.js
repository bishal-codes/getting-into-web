// Ethereum Blockchain Development

/** Day 1 - Blockchain: The foundation of trustless systems
 * - What is the purpose of blockchain?
 *   at its core, blockchain is
 *   - a decentralized, distributed ledger that records transactions across many computers
 *   - allows a network of computers to agree on a common state of data without the need for a central authority
 * - what is the key goal of blockchain?
 *   - decentralization: anyone can participate in the network and help secure it
 *   - immutability: once data is written/added to the blockchain, it cannot be changed/altered
 *   - transparency: all transactions are visible/recorded to everyone on the network/public ledger
 *
 * `this system enables trust among participants ensuring that no single entity can control over the data
 *  instead consensus mechanisms are used to agree on the state of the network`
 *
 * - Why is blockchain needed for cryptocurrencies?
 *   Bishal ----------(bank transfer of 10)------------------> Suman
 *    - trust: Bishal and Suman trust the bank to transfer the money
 *    - time: bank takes time to process the transaction
 *    - fees: bank charges fees for the transaction
 *    - privacy/trust: bank knows about the transaction
 *    - censorship: bank can block the transaction
 *    - security: bank can be hacked
 *    - control: bank can freeze the account
 *    - centralization: bank controls the money
 *    - corruption: bank can be corrupt
 *
 *  Bishal ----------(cryptocurrency transfer of 10)------------------> Suman
 *    - trust: Bishal and Suman trust the blockchain network
 *    - time: blockchain is faster than banks
 *    - fees: blockchain fees are lower than banks
 *    - privacy/trust/transparency: blockchain is transparent
 *    - censorship: blockchain is censorship-resistant
 *    - security: blockchain is secure
 *    - control: blockchain is decentralized
 *    - corruption: blockchain is trustless
 *    - centralization: blockchain is decentralized
 *    - immutability: blockchain is immutable
 *    - consensus: blockchain uses consensus mechanisms
 *
 * - How does blockchain work?
 *    - security (proof of work, proof of stake, etc.)
 *    - public/private key cryptography (authentication, encryption, etc.)
 *    - linked data structures (blocks, transactions, chronology etc.)
 *    - peer-to-peer network (nodes, miners, permissionless, etc.)
 *    - blockchain is a chain of blocks, each block contains a list of transactions
 *    - block: a group of transactions that are bundled together and added to the blockchain
 *    - transaction: a transfer of value between two parties
 *    - block header: contains metadata about the block (hash of the block, hash of the previous block, timestamp, etc.)
 *    - hash: a unique fingerprint of data that is used to secure the blockchain
 *    - mining/mining rewards (financial incentives): the process of adding new blocks to the blockchain by solving complex mathematical puzzles
 *    - consensus: the process by which the network agrees on the state of the blockchain
 *    - nodes: computers that participate in the blockchain network
 *    - full nodes: store the entire blockchain and validate transactions
 *
 * transactions are verified and recorded by network of nodes using cryptographic principles (making system trustless and scalable)
 * breakthrough in 2008, Bitcoin whitepaper by Satoshi Nakamoto
 *
 * Smart Contract Blockchains: Decentralizing Code Execution
 *  - Ethereum, the first smart contract blockchain
 *  - allow developers to write/deploy code that runs on the blockchain/decentralized network
 *  - code is immutable, transparent, and trustless
 *  - execution of code is not controlled by any single entity (censorship-resistant, transparently verifiable)
 *
 * Example: a simple solidity smart contract
 * - a simple smart contract that stores a message
 * - anyone can read the message
 * - only the owner can update the message
 * - the contract is immutable and trustless
 * - the contract is deployed on the Ethereum blockchain
 * - the contract is transparent and verifiable
 * - the contract is censorship-resistant, decentralized, and secure
 *
 * contract SimpleStorage {
 *  string message;
 * address owner;
 *
 * constructor() {
 * owner = msg.sender;
 * }
 *
 * function setMessage(string memory newMessage) public {
 * require(msg.sender == owner, "Only the owner can update the message");
 * message = newMessage;
 * }
 *
 * function getMessage() public view returns (string memory) {
 * return message;
 * }
 * }
 *
 * Week 1 - Cryptography Fundamentals
 *  - Understanding Cryptography Hash Functions: The building blocks of blockchain
 *    - What are Hash Functions?
 *    - What makes Hash Functions Secure and special?
 *
 *     - Hash functions are mathematical functions that take an input and produce a fixed-size output
 *     - usually represented as a hexadecimal string or string of characters
 *     - deterministic: same input always produces the same output/hash
 *     - fast to compute: can quickly compute the hash of an input
 *     - one-way: difficult to reverse-engineer the input from the output
 *     - collision-resistant: unlikely for two different inputs (size) to produce the same output (hash collision)
 *     - secure: used in blockchain to secure transactions and blocks
 *     - pseudorandom: hash functions appear random but are deterministic or Even a small change in the input results in a completely different hash.
 *
 *     | Input         | Input size     | output hash | output size |
 *     | 52            | 8 bytes        | 7f9b1fb3    | 32 bytes    |
 *     | "happy times" | 22 bytes       | 3d3f2bf3    | 32 bytes    |
 *     | bishal.jpg    | 875,000 bytes  | 9a3b4c5d    | 32 bytes    |
 *     | series.mp4    | 1.6e+10 bytes  | 1a2b3c4d    | 32 bytes    |
 *
 *    - Why are Hash Functions used/important in Blockchain?
 *      - secure transactions/security: hash functions secure transactions by creating a unique fingerprint of the data
 *      - data integrity: hash functions ensure data integrity by verifying the data has not been tampered with (hash of data) == (hash of data)
 *
 *   tool: https://emn178.github.io/online-tools/sha256
 */

/** Day 2 - Cryptographic hashes - SHA-256
 *
 * SHA-256 hashing (Secure Hash Algorithm 256-bit)
 *  - a cryptographic hash function that produces a 256-bit (32-byte)/(a fixed-size hash ) hash value from any input data
 *  - one-way hash function: cannot be decrypted back to the original input
 *
 * Challenge: Hashing Data - create and compare SHA256 hashes using [ethereum-crypto](https://github.com/ethereum/js-ethereum-cryptography)
 *
 * Brute Force Hashing or Brute force attack: trying all possible combinations of input to find the correct hash
 * - hash cracking: trying all possible inputs to find the correct hash
 * - hash collision: finding two different inputs that produce the same hash
 * - rainbow tables: precomputed hash values for common inputs
 *   - table which maps common inputs to their hash output.
 *
 *   | Common input/passwords | Hash output/sha256 hash |
 *   | password               | 5e884dsf...ef721d1542d8 |
 *   | 123456                 | 7c4a8d09....f4c2f70e9f8 |
 *
 * To protect against these attacks, it's common to add a salt to the input before hashing.
 * A salt is a random value that makes the resulting hash unique, even if the input is common.
 * Salting: Adding a random value to inputs before hashing to prevent attacks like rainbow table lookups.
 */

/**
 *  - Consensus Mechanisms
 *    - What are Consensus Mechanisms?
 *    - Common Consensus Mechanisms
 *      - Proof of Work (PoW)
 *      - Proof of Stake (PoS)
 *      - Practical Byzantine Fault Tolerance (PBFT)
 *      - Delegated Proof of Stake (DPoS)
 *  - Secure Public-Private Key Server
 *    - Create a basic server that securely generates, stores and serves public-private key pairs
 *      - Generate a public-private key pair (e.g. RSA or ECDSA)
 *      - securely store the private key
 *      - createAPIs to serve the public key to clients
 *
 * Week 2 - Blockchain Data Structures
 *  - Understanding Merkle Trees
 *  - Understanding Patricia Tries
 *  - Understanding Bloom Filters
 *  - UTXO (Unspent Transaction Output) Model VS Account-based Model
 *  - compare and contrast UTXO and Account-based models with examples
 *  - start thinking about which model is better for which use case
 *
 * Week 3 - Ethereum Fundamentals
 *  - Ethereum Node Basics
 *    - Understanding Ethereum Nodes
 *    - JSON-RPC API
 *  - Building and testing requests to Ethereum Nodes
 *  - Interacting with an Ethereum Node
 *
 * Week 4 - Smart Contracts and Solidity
 *   - Understanding Smart Contracts fundamentals
 *     - What are Smart Contracts?
 *     - Solidity Basics
 *
 * Week 5 - Advanced Solidity
 *   - contract inheritance, libraries, and types
 *   - common vulnerabilities in Smart Contracts
 *   - optimization techniques
 *   - testing using Truffle and Hardhat
 *
 * Week 6 - Smart Contract Use Cases and Projects
 *   - Use Cases
 *     - Aave (DeFi - a decentralized lending platform)
 *     - Uniswap (DeFi - a decentralized exchange protocol)
 *     - Chainlink (DeFi - a decentralized oracle network)
 *   - Projects
 *     - brainstorming and sketching out a project idea
 *     - focus on solving a real-world problem using smart contracts and decentralized applications
 */

/**
 * es6 - ECMAScript 6
 * - let, const - block scoped
 * - var - function scoped
 * - hoisting
 * - temporal dead zone - TDZ: before the variable is declared
 */
