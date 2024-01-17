import { RankingHeaderTable, RankingItemTable } from '@/components'
import { rankings } from '@/utils'
import Link from 'next/link'

function RankingTableList() {
  return (
    <ul className='ranking__table'>
      <li>
        <RankingHeaderTable />
      </li>
      {rankings.map((ranking) => (
        <li key={ranking.username}>
          <Link href='/artist/1'>
            <RankingItemTable item={ranking} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default RankingTableList
