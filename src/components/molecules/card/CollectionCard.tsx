import { UserPreview } from '@/components'
import Image from 'next/image'

interface Props {
  image: string
  imageTwo: string
  imageThree: string
  count: string
  title: string
  artist: string
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
