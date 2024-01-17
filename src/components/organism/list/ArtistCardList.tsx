import { ArtistCard } from '@/components'
import { topCreators } from '@/utils'
import clsx from 'clsx'
import Link from 'next/link'

interface Props {
  className?: string
}

function ArtistCardList({ className }: Props) {
  return (
    <ul className={clsx('artist__list', className)}>
      {topCreators.map((creator) => (
        <li className='artist__list__item' key={creator.name}>
          <Link href='/artist/1'>
            <ArtistCard artist={creator} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ArtistCardList
