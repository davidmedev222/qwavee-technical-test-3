import { NFTCard } from '@/components'
import { Nft } from '@/models'
import clsx from 'clsx'
import Link from 'next/link'

interface Props {
  /** Optional CSS class name */
  className?: string
  /** Array of NFT items to be displayed */
  nfts: Nft[]
}

function NFTCardList({ className, nfts }: Props) {
  return (
    <ul className={clsx('nft__list', className)}>
      {nfts.map((nft) => (
        <li className='nft__list__item' key={nft.title}>
          <Link href='/nft/1'>
            <NFTCard nft={nft} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NFTCardList
