import { UserPreview } from '@/components'
import { Nft } from '@/models'
import Image from 'next/image'

interface Props {
  /** Object containing NFT details */
  nft: Nft
}

function NFTCard({ nft }: Props) {
  return (
    <article className='nft'>
      <div className='nft__image'>
        <Image src={nft.image} alt='image NFT' fill sizes='(max-width: 640px) 100vw, (max-width: 1120px) 50vw, 33vw' />
      </div>
      <div className='nft__info'>
        <header className='nft__header'>
          <h6 className='nft__title'>{nft.title}</h6>
          <UserPreview className='nft__user' user={{ avatar: nft.avatar, username: nft.name }} />
        </header>
        <footer className='nft__footer'>
          <div className='nft__details'>
            <span className='nft__label'>Price</span>
            <span className='nft__value'>{nft.price} ETH</span>
          </div>
          <div className='nft__details nft__details--bid'>
            <span className='nft__label'>Highest Bid</span>
            <span className='nft__value'>{nft.bid} wETH</span>
          </div>
        </footer>
      </div>
    </article>
  )
}

export default NFTCard
