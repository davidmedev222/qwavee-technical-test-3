import Image from 'next/image'

interface Artist {
  ranking: number
  avatar: string
  name: string
  price: number
}

interface Props {
  artist: Artist
}

function ArtistCard({ artist }: Props) {
  return (
    <article className='artist'>
      <Image className='artist__img' src={artist.avatar} alt='artist avatar' width={120} height={120} />
      <span className='artist__ranking'>{artist.ranking}</span>
      <footer className='artist__footer'>
        <h3 className='artist__title'>{artist.name}</h3>
        <p className='artist__description'>
          Total Sales: <span className='artist__price'>{artist.price} ETH</span>
        </p>
      </footer>
    </article>
  )
}

export default ArtistCard
