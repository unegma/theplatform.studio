import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

// todo is this needed in every component?
import dotenv from 'dotenv';
dotenv.config();

const POLLING_INTERVAL = 12000
const RPC_URLS: { [chainId: number]: string } = {
  1: process.env.REACT_APP_RPC_URL_1 as string
}

console.log(RPC_URLS); //todo removeme

export const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] })

// todo need to set up infura connection (error after connecting)
export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1] },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
})
