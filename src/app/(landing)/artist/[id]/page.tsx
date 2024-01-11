import { ArtistInfoCard, UserProfileCover } from '@/components'
import { artists } from '@/utils'
import { notFound } from 'next/navigation'

interface Params {
  id: string
}

interface Props {
  params: Params
}

function ArtistDetailPage({ params }: Props) {
  const artist = artists.find((artist) => artist.id === params.id)
  if (!artist) notFound()

  return (
    <main>
      <UserProfileCover images={artist.images} />
      <ArtistInfoCard artist={artist.info} />
    </main>
  )
}

export default ArtistDetailPage
