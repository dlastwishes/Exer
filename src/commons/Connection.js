const Web3 = require('web3');

var web3 

if (typeof web3 !== 'undefined') {
 web3 = new Web3(web3.currentProvider);
 } 
else {
    web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/9124b40eb90c465f81ea487fd6f0a6a8'));
 }

 export default web3