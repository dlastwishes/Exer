import {web3 , exer , exerAddress} from '@Commons/Connection'
const Tx = require('ethereumjs-tx');
import Vault from '@Commons/providers/vault'
import { Alert , Linking} from "react-native";

_setupDataToTransfer = (destination , value) => {
    const signature = "0xa9059cbb"
    var amount = _padLeftNum(value)
    var hexAccount = (web3.utils.padLeft(destination , 64)).slice(2)
    var result = signature + hexAccount+ amount
    return result
}

_setupDataToClaimExp = (step , name) => {
    const signature = "0x8f3a8fed"
    var part_a = this._padLeftNum(step)
    var part_b = "0000000000000000000000000000000000000000000000000000000000000040"
    var part_c = this._countParamLengthToHex(name)
    var part_d = this._padRightString(name)
    var result = signature+part_a + part_b + part_c + part_d
    return result
}

transferExp = async (destination , value) => {
    const data = _setupDataToTransfer(destination , value)
    console.log(data);
    this._createTransaction(data)
}

claimExp = async (step , name) => {
   const data = _setupDataToClaimExp(step , name)
    this._createTransaction(data)
}  

_createTransaction = async (data) => {
  
    const pvk = await Vault.getPrivateKey()
    const acc = await Vault.getAccount();
    const nonce = await Vault.getNonce(acc.address)
    const privateKey = new Buffer(pvk, 'hex')
    const gasPrice = await Vault.getGasPriceToHex();
    var result = "";
    var error = false;
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
          if(!err){
            Alert.alert("Submit Transaction" , res , 
            [
              {
                text : "Etherscan",
                onPress: () => {
                  Linking.openURL("https://rinkeby.etherscan.io/tx/"+res).catch((err) => console.error('An error occurred', err));
                }
              }
            ])
          }
        else
        Alert.alert("Invalid Transaction")
      })
      
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



module.exports = {transferExp , claimExp}