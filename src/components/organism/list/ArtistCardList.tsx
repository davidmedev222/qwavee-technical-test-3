import { ArtistCard } from '@/components'
import { topCreators } from '@/utils'
import clsx from 'clsx'

interface Props {
  className?: string
}

function ArtistCardList({ className }: Props) {
  return (
    <ul className={clsx('artist__list', className)}>
      {topCreators.map((creator) => (
        <li className='artist__list__item' key={creator.name}>
          <ArtistCard artist={creator} />
        </li>
      ))}
    </ul>
  )
}

export default ArtistCardList
