import { UserPreview } from '@/components'
import Image from 'next/image'

interface Nft {
  image: string
  title: string
  avatar: string
  name: string
  price: number
  bid: number
}

interface Props {
  nft: Nft
}

function NFTCard({ nft }: Props) {
  return (
    <article className='nft'>
      <Image className='nft__image' src={nft.image} alt='image NFT' width={330} height={296} />
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
