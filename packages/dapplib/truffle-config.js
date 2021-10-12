require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remember smile imitate prison foster strike'; 
let testAccounts = [
"0x5a79256fef6e0aaee008c5d92b73b5a149c271e5201b7d6af99ad40f512c551c",
"0x8807cbf89fb8132004a1429882037a5b6b5e58935d5c942d7948b7ebb3449de6",
"0x6e1c8ba64866603116daa20530f7d822d055caa8f4c208471720ec1f639c4086",
"0x242b8a543546502a4134b9dd21c927bc11031040c7001ec66a81bfc98b3a2a78",
"0xfc5218efeb4985c4c6d590d8958924bf3ede0f0b76a3a25216fe1f9847d2d26d",
"0x18107d4166a1082de39e58884926fc5df06322f5a2db86648fb8cde6d514ea46",
"0x99dad80751d16b91388380fd9a6b40e0c1016bd6d62bdf470d7f06a1d68b616f",
"0xc2a81c95bb5f7cdf49c7b8a3f6da9bd53946e28a4bd40edf1aaf91232c576967",
"0x80c0d8430249b706b8845a4a8343bc04a5a9e1f9178d20c97bf9ec568da80a22",
"0x41a1d474c7bfcc989ffc6a8e0b08e1bbb33b2b1eb308f7496843cc82643e43ac"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

