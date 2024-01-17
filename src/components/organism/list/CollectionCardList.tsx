import { CollectionCard } from '@/components'
import { trendingCollections } from '@/utils'
import clsx from 'clsx'
import Link from 'next/link'

function CollectionCardList() {
  return (
    <ul className='collection__list'>
      {trendingCollections.map((collection, index) => (
        <li
          className={clsx(
            'collection__list__item',
            index === 0 && 'collection__list__item--one',
            index === 1 && 'collection__list__item--two',
            index === 2 && 'collection__list__item--three'
          )}
          key={collection.title}
        >
          <Link href='/nft/1'>
            <CollectionCard {...collection} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default CollectionCardList
