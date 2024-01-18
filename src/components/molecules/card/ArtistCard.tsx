import Image from 'next/image'

interface Artist {
  /** The ranking position of the artist */
  ranking: number
  /** URL of the artist's avatar image */
  avatar: string
  /** Name of the artist */
  name: string
  /** Price associated with the artist's work */
  price: number
}

interface Props {
  /** The artist object containing artist details */
  artist: Artist
}

function ArtistCard({ artist }: Props) {
  return (
    <article className='artist'>
      <Image className='artist__img' src={artist.avatar} alt='artist avatar' width={120} height={120} />
      <span className='artist__ranking'>{artist.ranking}</span>
      <footer className='artist__footer'>
        <h4 className='artist__title'>{artist.name}</h4>
        <p className='artist__description'>
          Total Sales: <span className='artist__price'>{artist.price} ETH</span>
        </p>
      </footer>
    </article>
  )
}

export default ArtistCard
