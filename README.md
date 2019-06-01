# Exer
This is Exer(cise) app and tokenization

## Getting Started
Follow the instructions below to build project

## Requirements
To run this project, it must be installed as follows: 

* JDK >= 1.7 (if you run on 1.6 you will get an error on "_cameras = new HashMap<>();")
* Install Expo 

and modules :
* node-libs-browser
* web3
* react-native-crypto
* react-native-randombytes
* react-native-modal
* react-native-qrcode-svg
* react-native-swiper
* react-navigation
* tcomb-form-native


## Installation
First, Install `Expo` See [This](https://docs.expo.io/versions/latest/) - For build project

install, Go to project source (/Exer) and run this command :
(Install package module in package.json)

```
npm install
```
Setup, shim.js to run non-React-Native dependencies

```
./node_modules/.bin/rn-nodeify --hack --install
```

setup, module Scan QR code moudule 
* See intruction for setup [react-native-qrcode-scanner ](https://github.com/moaazsidat/react-native-qrcode-scanner)

## Build Project

to build this project run this command:

go to root path /
```
expo start
```


## Backlog Features
* [x] Scan and genereate QR Code
* [x] Convert Private Key to Public Key and Address using Web3

* [x] Support Ethereum Blockchain
* [x] Connect to smart contract on Ethereum network
* [x] Create and submit transaction to change state on smart contract
* [x] Get data from smart contract on Ethereum network

