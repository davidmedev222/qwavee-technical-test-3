import { ArtistInfoCard, NFTCardList, Tabs, UserProfileCover } from '@/components'
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
      <Tabs
        tabs={[
          { id: '1', title: 'Created', href: 'created', badge: 302, content: <NFTCardList nfts={artist.posts} /> },
          { id: '2', title: 'Owned', href: 'owned', badge: 67, content: <NFTCardList nfts={artist.posts} /> },
          { id: '3', title: 'Collection', href: 'collection', badge: 4, content: <NFTCardList nfts={artist.posts} /> }
        ]}
      />
    </main>
  )
}

export default ArtistDetailPage
