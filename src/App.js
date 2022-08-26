import logo from './logo.svg'
import './App.css'
import { Web3ReactProvider } from '@web3-react/core'
import { ethers } from 'ethers'

import Wallet from './WallectConnect'

const getLibrary = (provider) => {
  return new ethers.providers.Web3Provider(provider)
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          <Wallet />
        </header>
      </div>
    </Web3ReactProvider>
  )
}

export default App
