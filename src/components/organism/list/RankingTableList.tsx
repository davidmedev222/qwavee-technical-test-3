import { RankingHeaderTable, RankingItemTable } from '@/components'
import { rankings } from '@/utils'

function RankingTableList() {
  return (
    <ul className='ranking__table'>
      <li>
        <RankingHeaderTable />
      </li>
      {rankings.map((ranking) => (
        <li key={ranking.username}>
          <RankingItemTable item={ranking} />
        </li>
      ))}
    </ul>
  )
}

export default RankingTableList
