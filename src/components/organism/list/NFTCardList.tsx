import { NFTCard } from '@/components'
import { nfts } from '@/utils'
import clsx from 'clsx'

interface Props {
  className?: string
}

function NFTCardList({ className }: Props) {
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
