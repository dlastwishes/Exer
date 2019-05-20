import {web3 , exer , exerAddress} from '@Commons/Connection'
const Tx = require('ethereumjs-tx');
import Vault from '@Commons/providers/vault'

setupDataToTransfer = async (destination , value) => {
    const signature = "0xa9059cbb"
    
}

setupDataToClaimExp = (step , name) => {
    const signature = "0x8f3a8fed"
    var part_a = this._padLeftNum(step)
    var part_b = "0000000000000000000000000000000000000000000000000000000000000040"
    var part_c = this._countParamLengthToHex(name)
    var part_d = this._padRightString(name)
    var result = signature+part_a + part_b + part_c + part_d
    return result
}

_countParamLengthToHex = (data) => {
    var dataLength = data.toString().length
    var dataLenghthInHex = web3.utils.numberToHex(dataLength)
    var result = web3.utils.padLeft(dataLenghthInHex,64)
    return result.slice(2)
}

_padRightString = (data) => {
    var dataHex = web3.utils.utf8ToHex(data)
    var result = web3.utils.padRight(dataHex , 64);
    return result.slice(2)
}

_padLeftNum =  (data) => {
    var dataHex = web3.utils.numberToHex(data)
    var result = web3.utils.padLeft(dataHex, 64);
    return result.slice(2)
}

transferExp = async (destination , value) => {
    const data = setupDataToTransfer(destination , value);
    this._sendTransaction(data)
}

claimExp = async (step , name) => {
    const data = setupDataToClaimExp(step , name);
    this._createTransaction(data)
}  

_createTransaction = async (data) => {
  
    const pvk = await Vault.getPrivateKey()
    const acc = await Vault.getAccount();
    const nonce = await Vault.getNonce(acc.address)
    const privateKey = new Buffer(pvk, 'hex')
    const gasPrice = await Vault.getGasPriceToHex();

    const rawTx = {
        from : acc.address,
        to : exerAddress,
        data : data.toString(),
        gasPrice: gasPrice,
        gasLimit: web3.utils.numberToHex(300000),
        gas : web3.utils.numberToHex(300000),
        nonce : web3.utils.numberToHex(nonce) ,
        value : web3.utils.numberToHex(web3.utils.toWei('0' , 'ether'))
      }

      const tx = new Tx(rawTx)
      tx.sign(privateKey)
      const serializedTx = tx.serialize();
      console.log('0x'+serializedTx.toString('hex'));
      web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), (err ,res) => {
          if(!err)
        console.log('Transaction hash :',res) 
        else
        console.log(err)
      })
}




module.exports = {transferExp , claimExp}