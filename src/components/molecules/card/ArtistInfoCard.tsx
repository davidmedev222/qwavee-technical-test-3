import { Button, CopyIcon, InfoDetailCard, PlusIcon, StatList } from '@/components'
import { ArtistInfo } from '@/models'
import Link from 'next/link'

interface Props {
  artist: ArtistInfo
}

function ArtistInfoCard({ artist }: Props) {
  return (
    <article className='artist__info'>
      <h1 className='artist__info__title'>{artist.name}</h1>
      <div className='artist__info__ctas'>
        <Button className='artist__info__btn'>
          <CopyIcon />
          {artist.code}
        </Button>
        <Button className='artist__info__btn' variant='outlined'>
          <PlusIcon />
          Follow
        </Button>
      </div>
      <StatList stats={artist.stats} />
      <InfoDetailCard title={artist.biography.title}>
        <p>{artist.biography.description}</p>
      </InfoDetailCard>
      <InfoDetailCard title='Links'>
        <div className='artist__info__links'>
          {artist.links.map((social) => (
            <Link key={social.title} href={social.url} target='_blank' rel='noreferrer'>
              <social.icon />
            </Link>
          ))}
        </div>
      </InfoDetailCard>
    </article>
  )
}

export default ArtistInfoCard
