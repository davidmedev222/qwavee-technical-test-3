import { UserPreview } from '@/components'

interface RankingItem {
  rank: number
  avatar: string
  username: string
  change: string
  nfts: number
  volume: number
}

interface Props {
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
