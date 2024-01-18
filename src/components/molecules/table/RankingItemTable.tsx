import { UserPreview } from '@/components'

interface RankingItem {
  /** The ranking position */
  rank: number
  /** URL of the user's avatar image */
  avatar: string
  /** Username of the ranked user */
  username: string
  /** Change in ranking since the last period */
  change: string
  /** Number of NFTs sold */
  nfts: number
  /** Total volume of NFT sales */
  volume: number
}

interface Props {
  /** The item representing the ranking data */
  item: RankingItem
}

function RankingItemTable({ item }: Props) {
  return (
    <article className='ranking__table__item'>
      <span className='ranking__table__item__rank'>{item.rank}</span>
      <UserPreview className='ranking__table__item__artist' user={{ avatar: item.avatar, username: item.username }} />
      <span className='ranking__table__item__change'>{item.change}</span>
      <span className='ranking__table__item__nfts'>{item.nfts}</span>
      <span className='ranking__table__item__volume'>{item.volume} ETH</span>
    </article>
  )
}

export default RankingItemTable
