import { AsyncStorage } from "react-native";
import { web3 } from "@Commons/Connection";

setPrivateKey = async pvk => {
  try {
    await AsyncStorage.setItem("pvk", pvk.toLowerCase());
  } catch (error) {
    console.log(error.message);
  }
};

getPrivateKey = async () => {
  try {
    const item = await AsyncStorage.getItem("pvk");
    const pvk = item.toString();
    return pvk;
  } catch (error) {
    console.log(error.message);
  }
};

getAccount = async () => {
  const pvk = await getPrivateKey();
  const pvkHex = "0x" + pvk;
  const acc = web3.eth.accounts.privateKeyToAccount(pvkHex);
  return acc;
};

getGoalStep = async () => {
  const goal = await AsyncStorage.getItem("goalStep");
  let result;
  if (goal != null) {
    result = goal.toString();
  }

  return result;
};

getNonce = async address => {
  const nonceCount = await web3.eth.getTransactionCount(address);
  return nonceCount;
};

getNameProfile = async () => {
  try {
    const item = await AsyncStorage.getItem("nameProfile");
    const name = item.toString();
    return name;
  } catch (error) {
    console.log(error.message);
  }
};

getGasPriceToHex = async () => {
  try {
    const item = await AsyncStorage.getItem("gasPrice");
    const gasPrice = web3.utils.numberToHex(web3.utils.toWei(item, "gwei"));
    return gasPrice;
  } catch (error) {
    console.log(error.message);
  }
};

setDataToVault = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, data.toString());
  } catch (error) {
    console.log(error.message);
  }
};

export default {
  setPrivateKey,
  getPrivateKey,
  getAccount,
  getGoalStep,
  getGasPriceToHex,
  setDataToVault,
  getNonce
};
