import { connectors } from './connectors'
import { useWeb3React } from '@web3-react/core'

const Wallet = () => {
  const { activate } = useWeb3React()
  const handleConnect = async () => {
    await activate(connectors.walletConnect)
  }
  return (
    <div>
      <button onClick={handleConnect}>Connect</button>
    </div>
  )
}

export default Wallet
