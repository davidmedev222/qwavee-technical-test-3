import { UserPreview } from '@/components'
import Image from 'next/image'

interface Props {
  /** URL of the primary image */
  image: string
  /** URL of the secondary image */
  imageTwo: string
  /** URL of the tertiary image */
  imageThree: string
  /** Count of items or elements */
  count: string
  /** Title of the collection */
  title: string
  /** Name of the artist */
  artist: string
  /** URL of the artist's avatar image */
  avatar: string
}

function CollectionCard({ image, imageTwo, imageThree, count, title, artist, avatar }: Props) {
  return (
    <article className='collection'>
      <header className='collection__header'>
        <Image className='collection__img' src={image} alt='image NFT' width={330} height={330} />
        <div className='collection__options'>
          <Image className='collection__img' src={imageTwo} alt='image NFT' width={100} height={100} />
          <Image className='collection__img' src={imageThree} alt='image NFT' width={100} height={100} />
          <div className='collection__count'>{count}</div>
        </div>
      </header>
      <footer className='collection__footer'>
        <h3 className='collection__title'>{title}</h3>
        <UserPreview user={{ avatar, username: artist }} />
      </footer>
    </article>
  )
}

export default CollectionCard
