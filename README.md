# Bitcoin Source API

Bitcoin Source API provides a simplified programming model to access public REST APIs for networks supported by [bitcoin-source](https://github.com/the-bitcoin-token/bitcoin-source). It simplifies working with the Insight API for various coins.

Bitcoin Source API supports the following coins:

-   Bitcoin Cash (BCH)
-   Bitcoin SV (BSV)
-   Bitcoin (BTC)
-   Litecoin (LTC)

## Install using npm

    npm install bitcoin-source-api

## Usage

An example of how to use the API is shown below.

    const Insight = require('bitcoin-source-api').Insight
    const api = Insight.create('bch')

    ;(async () => {
        const blk = await api.getLastBlockHash()
        console.log(`Last block for ${api.coin} is ${blk}`)
    })()

The general syntax for creating an API is

    const api = Insight.create(coin, network, url)

where network and url are optional.  

Here are more examples of creating an API.

    const api = Insight.create('bsv', 'mainnet')

    const api = Insight.create('ltc', 'testnet', 'https://localhost:3000/api')

## Developer Installation

-   clone repo: `git clone https://github.com/the-bitcoin-token/bitcoin-source-api.git`
-   move to folder: `cd bitcoin-source-api`
-   install: `npm install`

## Test

-   run unit tests: `npm run test`
-   run Flow: `npm run flow`
-   run Lint: `npm run lint`
-   generate docs: `npm run docs`
-   test coverage: `npm run coverage`

Integration tests are currently skipped to make the app easily portable.

## Contact

If you have any problems or questions, please email brentongunning@gmail.com

## Troubleshooting

**Missing packages or objects during lint**

If the `npm run lint` returns Flow errors complaining about missing packages or objects that
should be present then Flow's cache is likely out of date. Run `npx flow stop`.

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [IInsightApiBasic](#iinsightapibasic)
    -   [Properties](#properties)
    -   [getBalance](#getbalance)
        -   [Parameters](#parameters)
    -   [sendTransaction](#sendtransaction)
        -   [Parameters](#parameters-1)
    -   [getBlockHash](#getblockhash)
        -   [Parameters](#parameters-2)
    -   [getLastBlockHash](#getlastblockhash)
    -   [getTransaction](#gettransaction)
        -   [Parameters](#parameters-3)
    -   [getRawTransaction](#getrawtransaction)
        -   [Parameters](#parameters-4)
    -   [getUtxos](#getutxos)
        -   [Parameters](#parameters-5)
    -   [getTxo](#gettxo)
        -   [Parameters](#parameters-6)
-   [coin](#coin)
-   [network](#network)
-   [url](#url)
-   [getAddress](#getaddress)
    -   [Parameters](#parameters-7)
-   [IInsightApi](#iinsightapi)
    -   [Properties](#properties-1)
    -   [getBlock](#getblock)
        -   [Parameters](#parameters-8)
    -   [getRawBlock](#getrawblock)
        -   [Parameters](#parameters-9)
-   [ApiInsightBase](#apiinsightbase)
    -   [Parameters](#parameters-10)
-   [BchInsightApi](#bchinsightapi)
    -   [Parameters](#parameters-11)
-   [BsvInsightApi](#bsvinsightapi)
    -   [Parameters](#parameters-12)
-   [BTC_BITPAY_MAINNET_URL](#btc_bitpay_mainnet_url)
-   [BTC_BITPAY_TESTNET_URL](#btc_bitpay_testnet_url)
-   [BtcInsightApi](#btcinsightapi)
    -   [Parameters](#parameters-13)
-   [LTC_LITECORE_MAINNET_URL](#ltc_litecore_mainnet_url)
-   [LTC_LITECORE_TESTNET_URL](#ltc_litecore_testnet_url)
-   [LtcInsightApi](#ltcinsightapi)
    -   [Parameters](#parameters-14)
-   [ApiError](#apierror)
    -   [Parameters](#parameters-15)
-   [Coin](#coin-1)
-   [Network](#network-1)

### IInsightApiBasic

REST API interface that all supported chains must implement.

#### Properties

-   `coin` **[Coin](#coin)** 
-   `network` **[Network](#network)** 
-   `url` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `getAddress` **function (address: Address): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** 
-   `getBalance` **function (address: Address): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)>** 
-   `sendTransaction` **function (transaction: Transaction): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;TransactionId>** 
-   `getBlockHash` **function (height: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** 
-   `getLastBlockHash` **function (): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** 
-   `getTransaction` **function (txId: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** 
-   `getRawTransaction` **function (txId: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** 
-   `getUtxos` **function (address: Address): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;Txo>>** 
-   `getTxo` **function (outputId: OutputId): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;Txo>** 

#### getBalance

Retrieves a given address' balance in satoshis.

##### Parameters

-   `address` **Address** to get balance of


-   Throws **[ApiError](#apierror)** if the request cannot be completed.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)>** the balance of the address

#### sendTransaction

Sends a transaction for broadcasting to the network.

##### Parameters

-   `the` **Transaction** transaction to send


-   Throws **[ApiError](#apierror)** if the request cannot be completed.

Returns **any** the resulting transaction id

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;TransactionId>** a json object with the TxId that was sent

#### getBlockHash

Retrieves the hash of a block from its height.

##### Parameters

-   `height` **any** Block height


-   Throws **[ApiError](#apierror)** if the request cannot be completed.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** a hex string containing the block hash

#### getLastBlockHash

Retrives the hash of the latest block.

-   Throws **[ApiError](#apierror)** if the request cannot be completed.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** a hex string containing the block hash of the most recent block

#### getTransaction

Retrieves a JSON-formatted transaction from its hash.

##### Parameters

-   `txId` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Transaction hash


-   Throws **[ApiError](#apierror)** if the request cannot be completed.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** a JSON object of the decoded transaction

#### getRawTransaction

Retrieves a hex-formatted transaction given its hash.

##### Parameters

-   `txId` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Transaction hash


-   Throws **[ApiError](#apierror)** if the request cannot be completed.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** a hex string containing the transaction bytes

#### getUtxos

Retrieves a given address' unspent outputs (UTXO set).

##### Parameters

-   `address` **Address** Address whose UTXOs are to be retrieved


-   Throws **[ApiError](#apierror)** if the request cannot be completed.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;Txo>>** An array of unspent transaction outputs (UTXO) for the address

#### getTxo

Gets a transaction output given an output id.

##### Parameters

-   `outputId` **OutputId** a JSON object containing the Transaction Id and output index to get


-   Throws **[ApiError](#apierror)** if the request cannot be completed.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;Txo>** A Transaction output

### coin

The coin that the api is configured for.

### network

The network that the api is configured for. (i.e. mainnet vs testnet)

### url

The url string for the REST API.

### getAddress

Retrieves a given address' history.

#### Parameters

-   `address` **Address** to get history for


-   Throws **[ApiError](#apierror)** If the request cannot be completed.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** Address balance and a list of transaction history for the address

### IInsightApi

**Extends IInsightApiBasic**

A REST API interface that all Insight APIs should implement to be considered complete

#### Properties

-   `getBlock` **function (hashOrHeight: ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** 
-   `getRawBlock` **function (hashOrHeight: ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** 

#### getBlock

Retrieves a JSON-formatted block from its hash or height.

##### Parameters

-   `hashOrHeight` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))** Hash or height of the block


-   Throws **[ApiError](#apierror)** if the request cannot be completed.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** a JSON object of the block contents

#### getRawBlock

Retrives a hex-formatted block given its hash or height.

##### Parameters

-   `hashOrHeight` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))** Hash or height of the block


-   Throws **[ApiError](#apierror)** if the request cannot be completed.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** a hex string of the block contents

### ApiInsightBase

Base class for implementing Api

#### Parameters

-   `coin` **[Coin](#coin)** 
-   `network` **[Network](#network)** 
-   `url` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Insight API URL

### BchInsightApi

**Extends ApiInsight**

API for BCH Insight nodes

#### Parameters

-   `network` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** mainnet or testnet
-   `url` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Insight API URL endpoint

### BsvInsightApi

**Extends ApiInsightBase**

API for BSV Insight nodes

#### Parameters

-   `network` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** mainnet or testnet
-   `url` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Insight API URL

### BTC_BITPAY_MAINNET_URL

Default BTC mainnet insight node url

Type: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

### BTC_BITPAY_TESTNET_URL

Default BTC testnet insight node url

Type: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

### BtcInsightApi

**Extends ApiInsight**

API for BTC Insight nodes

#### Parameters

-   `network` **[Network](#network)** 
-   `url` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Insight API URL

### LTC_LITECORE_MAINNET_URL

Default LTC mainnet insight node url

Type: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

### LTC_LITECORE_TESTNET_URL

Default LTC testnet insight node url

Type: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

### LtcInsightApi

**Extends ApiInsight**

API for LTC Insight nodes

#### Parameters

-   `network` **[Network](#network)** 
-   `url` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Insight API URL

### ApiError

**Extends Error**

A custom Error class to get better stack traces.

#### Parameters

-   `title`  
-   `detail`  
-   `params` **...any** 

### 

The Insight class is a Factory that constructs an Insight Api object for the caller.
If passed a known coin then it creates a concrete class of that type.
 Example: Insight.create('bch', 'mainnet', '<http://localhost:3000'>)
If passed known coin then we can find reasonable defaults for network and url
 example: Insight.create('bch')
If passed an unknonwn coin then caller must also pass a url to give back a generic API implementation
 Example: Insight.create('mycoin', 'mainnet', '<http://localhost:3000'>)
If passed an unknown coin then caller must also pass a url
 Example: Insight.create('throwsErrorBecauseNoUrl')

### Coin

Coins that have been tested with the API

Type: (`"bch"` \| `"bsv"` \| `"btc"` \| `"ltc"`)

### Network

Coin Networks

Type: (`"mainnet"` \| `"testnet"`)
