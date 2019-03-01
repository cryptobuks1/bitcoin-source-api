import { crypto } from 'bitcoinsource'
import { isSendTransactionTest } from './util'

export default {
  name: 'Dash Testnet',
  apiconfig: {
    coin: 'dash',
    network: 'testnet'
  },
  runWhen: (api, testName) => !isSendTransactionTest(api, testName),
  mnemonic:
    'rail install size scorpion orchard kingdom vacuum collect pencil element fall enhance media island medal',
  sigType: crypto.Signature.SIGHASH_ALL,
  testAddress: 'Xv7Tczd1B7gnbe3cCY7DipVPYQBu4v8TSP',
  addressCountMinimum: 1,
  txId: '3cc2ada7c917d83465b9b00cc3569aa619f4a2a6bbf2e818b15e935e984f519c',
  coinbaseTxId:
    'f0ddfd9a3a7f668c5e0e7055d0d01cdb87409d773bcd5075a0e83b706aefb89e',
  genesisBlockHash:
    '0000047d24635e347be3aaaeb66c26be94901a2f962feccd4f95090191f208c1',
  genesisBlockContents:
    '020000002cbcf83b62913d56f605c0e581a48872839428c92e5eb76cd7ad94bcaf0b00007f11dcce14075520e8f74cc4ddf092b4e26ebd23b8d8665a1ae5bfc41b58fdb4c3a95e53ffff0f1ef37a00000101000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0a510101062f503253482fffffffff0100743ba40b0000002321020131f38ae3eb0714531dbfc3f45491b4131d1211e3777177636388bb5a74c3e4ac00000000',
  getBlockHash:
    '00000013620c8be5942ddd03781b3f44a73ddb0ac411a90a1467095dca3b2846',
  getRawBlockHash:
    '00000013620c8be5942ddd03781b3f44a73ddb0ac411a90a1467095dca3b2846',
  getRawBlockContents:
    '00000020580d701508a25dd7813371b82e882a33689bda654347102e9d0a0a290a000000e241aa85506b5df0e3a9b93a9b3c863e65b03b6f55f4f7848de024107341c2ccf378785c2138161d0001a86f0203000500010000000000000000000000000000000000000000000000000000000000000000ffffffff13031acd000e2f5032506f6f6c2d74444153482fffffffff04ac270e43000000001976a914f31b0961b379a7da3d3320e73abd59fa2dcbe73488aca7270e43000000001976a91470da282ad16926e127064b7d3d787d7f3793014788ac01000000000000004341047559d13c3f81b1fadbd8dd03e4b5a1c73b05e2b980e00d467aa9440b29c7de23664dde6428d75cafed22ae4f0d302e26c5c5a5dd4d3e1b796d7281bdc9430f35ac00000000000000002a6a28d550a7bacb4d2452ec6cf013157a56864ef809c8676ac863ae775292f7278f570000000000000000000000002601001acd00003c491d1b679eec59e363a73dbedb1ec65c8035a2b4eb46053fd910455cdb23380200000001f66520701b316f80ca48aa0506c6bdbb708a24f020e5da16a0b3551a33fdc8ff010000006b483045022100d7c11bcc07ab5899600a4503c3ddfbb92fa94befbf0999df618855b3a7ff30590220209b4ba58faaaf70d2be51dc64efe879c39e8a208f8984572c62fcacfac6ac6e01210273d3e98a14d78caabedb0f18e90de44a6807e14b8c51e2ca68ffae72337eed25ffffffff028d3a0000000000001976a9141ae274ee63ab37d64086a6ac4b59a0de69f8ab8988ac12030000000000001976a914d4583edd392075f93b2aab31c0a68ed3613cf0c188ac00000000',
  txOutput: {
    txId: '3cc2ada7c917d83465b9b00cc3569aa619f4a2a6bbf2e818b15e935e984f519c',
    outputIndex: 0,
    address: 'yNmbhgXgmhpmUxf5fE3rwAGqZ4ofL8UvRi',
    scriptPubKey: '76a9141ae274ee63ab37d64086a6ac4b59a0de69f8ab8988ac',
    amount: 0.00014989,
    satoshis: 0.00014989 * 100000000,
    height: 52506,
    confirmations: 20
  }
}