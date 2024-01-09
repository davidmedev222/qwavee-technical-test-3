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
        <h2 className='collection__title'>{title}</h2>
        <div className='collection__artist'>
          <Image className='collection__avatar' src={avatar} alt='avatar NFT' width={24} height={24} />
          <span className='collection__name'>{artist}</span>
        </div>
      </footer>
    </article>
  )
}

export default CollectionCard
