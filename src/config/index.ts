import * as dotenv from 'dotenv'

dotenv.config()

const {
    CARDANO_NETWORK
} = process.env;

export const config = {
    shelleyGenesisFile: CARDANO_NETWORK + '-shelley-genesis.json',
    cardanoNetwork: CARDANO_NETWORK === 'mainnet' ? CARDANO_NETWORK : 'testnet',
    cardanoNetworkMagic: CARDANO_NETWORK === 'mainnet' ? CARDANO_NETWORK : 'testnet-magic 1097911063'
}