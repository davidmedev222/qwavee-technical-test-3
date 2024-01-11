import { NFTCard } from '@/components'
import clsx from 'clsx'

interface NFT {
  image: string
  title: string
  avatar: string
  name: string
  price: number
  bid: number
}

interface Props {
  className?: string
  nfts: NFT[]
}

function NFTCardList({ className, nfts }: Props) {
  return (
    <ul className={clsx('nft__list', className)}>
      {nfts.map((nft) => (
        <li className='nft__list__item' key={nft.title}>
          <NFTCard nft={nft} />
        </li>
      ))}
    </ul>
  )
}

export default NFTCardList
