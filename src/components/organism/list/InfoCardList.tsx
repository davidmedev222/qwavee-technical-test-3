import { InfoCard } from '@/components'
import { works } from '@/utils'

function InfoCardList() {
  return (
    <ul className='info__list'>
      {works.map((info) => (
        <li className='info__list__item' key={info.title}>
          <InfoCard info={info} />
        </li>
      ))}
    </ul>
  )
}

export default InfoCardList
