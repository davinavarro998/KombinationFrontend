const web3 = new Web3(ethereum);
const abi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_marketplaceAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "contractOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "maximumSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "mintingPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "nftSymbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "amountCreated",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        }
      ],
      "name": "createToken",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    }
  ];

const address = '0x1b490DBb942AA0F59fDCb7a36cbE530121B347a5';
var client_account = document.querySelector('header div');
var name = document.getElementById('name');
var symbol = document.getElementById('symbol');
var price = document.getElementById('price');
var nft_address = document.getElementById('nft_address');
nft_address.innerHTML = address;
var nft_amount = document.getElementById('nft_amount');
var mintingButton = document.querySelectorAll('.container .box button')[0];
var current_token_id = document.getElementById('current_token_id');
var maximum_token_id = document.getElementById('maximum_token_id');


const showAccount = async ()=>{
    if (ethereum){
        let accounts = await ethereum.request({method:'eth_requestAccounts'});
        let account = accounts[0];
        return account;
    } else {
        alert('No wallet detected');
    }
}

showAccount().then((res)=>{
    client_account.innerHTML = res.slice(0, 7) + '...' + res.slice(35, res.length);
}).catch((err)=>{
    console.error(err);
});

client_account.addEventListener('click', ()=>{
    showAccount().then((res)=>{
        alert(res);
    }).catch((err)=>{
        console.error(err);
    });
});


const getName = async ()=>{
    if (ethereum){
        let myContract = new web3.eth.Contract(abi, address);
        let sendCall = await myContract.methods.name().call();
        return sendCall;
    } else {
        alert('No wallet detected');
    }
}

getName().then((res)=>{
    name.innerHTML = res;
}).catch((err)=>{
    console.error(err);
});


const getSymbol = async ()=>{
    if (ethereum){
        let myContract = new web3.eth.Contract(abi, address);
        let sendCall = await myContract.methods.symbol().call();
        return sendCall;
    } else {
        alert('No wallet detected');
    }
}

getSymbol().then((res)=>{
    symbol.innerHTML = res;
}).catch((err)=>{
    console.error(err);
});



const getPrice = async ()=>{
    if (ethereum){
        let myContract = new web3.eth.Contract(abi, address);
        let sendCall = await myContract.methods.mintingPrice().call();
        return sendCall;
    } else {
        alert('No wallet detected');
    }
}

getPrice().then((res)=>{
    let bigNumber = Number(res) / (10 ** 9);
    price.innerHTML = bigNumber.toString() + ' Gwei';
}).catch((err)=>{
    console.error(err);
});




const getAmount = async()=>{
    if (ethereum){
        let myContract = new web3.eth.Contract(abi, address);
        let sendCall = await myContract.methods.amountCreated().call();
        return sendCall;
    } else {
        alert('No wallet detected');
    }
}

getAmount().then((res)=>{
    nft_amount.innerHTML = res;
    current_token_id.innerHTML = res;
    if(Number(current_token_id.innerHTML) === Number(maximum_token_id.innerHTML)){
        document.getElementById('box1').innerHTML = '<strong>All NFTs are minted!</strong>';
    }
}).catch((err)=>{
    console.error(err);
});



const mintKombi = async () => {
    if (ethereum){
        let accounts = await ethereum.request({method:'eth_requestAccounts'});
        let account = accounts[0];
        let myContract = new web3.eth.Contract(abi, address);
        let sendCall = await myContract.methods.createToken(account).send({from:account, value:'100000000000000000'});
        return sendCall;
    } else {
        alert('No wallet detected');
    }
}

mintingButton.addEventListener('click', ()=>{
    mintKombi().then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.error(err);
    });
});


const maximumSupply = async ()=>{
    if (ethereum){
        let accounts = await ethereum.request({method:'eth_requestAccounts'});
        let myContract = new web3.eth.Contract(abi, address);
        let sendCall = await myContract.methods.maximumSupply().call();
        return sendCall;
    } else {
        alert('No wallet detected');
    }
}

maximumSupply().then((res)=>{
    maximum_token_id.innerHTML = res;
}).catch((err)=>{
    console.log(err);
});
