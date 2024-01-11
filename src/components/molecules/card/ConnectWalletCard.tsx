import { Button, CoinbaseIcon, MetamaskIcon, Subhead, WalletIcon } from '@/components'

function ConnectWalletCard() {
  return (
    <article className='wallet__card'>
      <header className='wallet__card__header'>
        <h1 className='wallet__card__title'>Connect Wallet</h1>
        <Subhead className='wallet__card__description'>
          Choose a wallet you want to connect. There are several wallet providers.
        </Subhead>
      </header>
      <footer className='wallet__card__footer'>
        <Button variant='wallet'>
          <MetamaskIcon />
          Metamask
        </Button>
        <Button variant='wallet'>
          <WalletIcon />
          Wallet Connect
        </Button>
        <Button variant='wallet'>
          <CoinbaseIcon />
          Coinbase
        </Button>
      </footer>
    </article>
  )
}

export default ConnectWalletCard
