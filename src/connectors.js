import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

const walletConnect = new WalletConnectConnector({
  rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
})

export const connectors = {
  walletConnect: walletConnect,
}
