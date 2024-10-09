const contractAddress = "0x0b3e53a79cba716a81d9af970cba6c961042744b";
const contractABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "carId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bidAmount",
        type: "uint256",
      },
    ],
    name: "AuctionEnded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "carId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minBid",
        type: "uint256",
      },
    ],
    name: "AuctionStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "carId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "make",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "model",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "year",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "CarRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "carId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bidAmount",
        type: "uint256",
      },
    ],
    name: "NewBid",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "carAuctions",
    outputs: [
      {
        internalType: "uint256",
        name: "carId",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "seller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minBid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "highestBid",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "highestBidder",
        type: "address",
      },
      {
        internalType: "bool",
        name: "ended",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "started",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "cars",
    outputs: [
      {
        internalType: "string",
        name: "make",
        type: "string",
      },
      {
        internalType: "string",
        name: "model",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "year",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "owner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "registered",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "carId",
        type: "uint256",
      },
    ],
    name: "endAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "carId",
        type: "uint256",
      },
    ],
    name: "getAuctionDetails",
    outputs: [
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minBid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "highestBid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "highestBidder",
        type: "address",
      },
      {
        internalType: "bool",
        name: "ended",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "carId",
        type: "uint256",
      },
    ],
    name: "getCarDetails",
    outputs: [
      {
        internalType: "string",
        name: "make",
        type: "string",
      },
      {
        internalType: "string",
        name: "model",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "year",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "carId",
        type: "uint256",
      },
    ],
    name: "placeBid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "make",
        type: "string",
      },
      {
        internalType: "string",
        name: "model",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "year",
        type: "uint256",
      },
    ],
    name: "registerCar",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "carId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minBid",
        type: "uint256",
      },
    ],
    name: "startCarAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

// Ensure Web3 is initialized
if (typeof window.ethereum !== "undefined") {
  // Use window.ethereum as the provider
  web3 = new Web3(window.ethereum);

  // Request account access if needed
  try {
    window.ethereum.request({ method: "eth_requestAccounts" });
  } catch (error) {
    console.error("User denied account access", error);
  }
} else if (typeof window.web3 !== "undefined") {
  // Legacy dapp browsers, using deprecated window.web3.currentProvider
  web3 = new Web3(window.web3.currentProvider);
  console.warn(
    "Using deprecated window.web3. Please upgrade to window.ethereum."
  );
} else {
  // Fallback to localhost; you could also use other providers like Infura
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  console.warn("No Ethereum provider detected. Falling back to localhost.");
}

// Contract instance (replace 'contractAddress' and 'contractABI' with your values)
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Register a new car
document.getElementById("registerCar").addEventListener("click", async () => {
  const make = document.getElementById("make").value;
  const model = document.getElementById("model").value;
  const year = document.getElementById("year").value;
  const accounts = await web3.eth.getAccounts();

  const estimatedGas = await contract.methods
    .registerCar(make, model, year)
    .estimateGas({ from: accounts[0] });

  const gasPrice = await web3.eth.getGasPrice();
  const reducedGasPrice = Math.floor(gasPrice * 0.9); // Ensure integer

  contract.methods
    .registerCar(make, model, year)
    .send({
      from: accounts[0],
      gas: estimatedGas,
      gasPrice: reducedGasPrice,
    })
    .then((receipt) => {
      alert("Car registered successfully!");
    })
    .catch((error) => {
      console.error(error);
    });
});

// Start Auction
document.getElementById("startAuction").addEventListener("click", async () => {
  const carId = document.getElementById("auctionCarId").value;
  const minBid = web3.utils.toWei(
    document.getElementById("minBid").value,
    "ether"
  ); // Convert ether to wei
  const accounts = await web3.eth.getAccounts();

  const estimatedGas = await contract.methods
    .startCarAuction(carId, minBid)
    .estimateGas({ from: accounts[0] });

  const gasPrice = await web3.eth.getGasPrice();
  const reducedGasPrice = Math.floor(gasPrice * 0.9); // Ensure integer

  contract.methods
    .startCarAuction(carId, minBid)
    .send({
      from: accounts[0],
      gas: estimatedGas,
      gasPrice: reducedGasPrice,
    })
    .then((receipt) => {
      alert(`Auction started for car ID: ${carId}`);
    })
    .catch((error) => {
      console.error(error);
    });
});

// Place a Bid
document.getElementById("placeBid").addEventListener("click", async () => {
  const carId = document.getElementById("bidCarId").value;
  const bidAmount = web3.utils.toWei(
    document.getElementById("bidAmount").value,
    "ether"
  ); // Convert ether to wei
  const accounts = await web3.eth.getAccounts();

  const estimatedGas = await contract.methods
    .placeBid(carId)
    .estimateGas({ from: accounts[0], value: bidAmount });

  const gasPrice = await web3.eth.getGasPrice();
  const reducedGasPrice = Math.floor(gasPrice * 0.9); // Ensure integer

  contract.methods
    .placeBid(carId)
    .send({
      from: accounts[0],
      value: bidAmount, // Value sent with the transaction
      gas: estimatedGas,
      gasPrice: reducedGasPrice,
    })
    .then((receipt) => {
      alert("Bid placed successfully!");
    })
    .catch((error) => {
      console.error(error);
    });
});

// End Auction
document.getElementById("endAuction").addEventListener("click", async () => {
  const carId = document.getElementById("endCarId").value;
  const accounts = await web3.eth.getAccounts();

  const estimatedGas = await contract.methods
    .endAuction(carId)
    .estimateGas({ from: accounts[0] });

  const gasPrice = await web3.eth.getGasPrice();
  const reducedGasPrice = Math.floor(gasPrice * 0.9); // Ensure integer

  contract.methods
    .endAuction(carId)
    .send({
      from: accounts[0],
      gas: estimatedGas,
      gasPrice: reducedGasPrice,
    })
    .then((receipt) => {
      alert(`Auction ended for car ID: ${carId}`);
    })
    .catch((error) => {
      console.error(error);
    });
});

// Get Car Details
document.getElementById("getDetails").addEventListener("click", async () => {
  const carId = document.getElementById("detailsCarId").value;

  contract.methods
    .getCarDetails(carId)
    .call()
    .then((details) => {
      alert(
        `Car Details - Make: ${details[0]}, Model: ${details[1]}, Year: ${details[2]}, Owner: ${details[3]}`
      );
    })
    .catch((error) => {
      console.error(error);
    });
});

// Get Auction Details
document.getElementById("getAucDetails").addEventListener("click", async () => {
  const carId = document.getElementById("aucCarId").value;

  contract.methods
    .getAuctionDetails(carId)
    .call()
    .then((details) => {
      alert(
        `Auction Details - Seller: ${details[0]}, Min Bid: ${web3.utils.fromWei(
          details[1],
          "ether"
        )} ETH, Highest Bid: ${web3.utils.fromWei(
          details[2],
          "ether"
        )} ETH, Highest Bidder: ${details[3]}, Ended: ${details[4]}`
      );
    })
    .catch((error) => {
      console.error(error);
    });
});
