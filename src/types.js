// @flow

export type OutputId = {|
  txId: string,
  outputNumber: number
|}

export type TransactionId = {|
  txId: string
|}

export type Txo = {|
  address: string,
  txId: string,
  vout: number,
  scriptPubKey: string,
  amount: number,
  satoshis: number,
  height: number,
  confirmations: number,
  spent: boolean
|}

export type Coin = 'bch' | 'bsv'

export type Network = 'mainnet' | 'testnet'

export type ApiConfiguration = {|
  coin: Coin,
  network?: Network,
  url?: string
|}

export type ApiUrl = {|
  isDefault: boolean,
  name: string,
  coin: Coin,
  network: Network,
  url: string
|}
