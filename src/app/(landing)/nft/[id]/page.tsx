import { MoreFromArtistSection, NFTInfoSection, ResponsiveCover } from '@/components'
import { nfts } from '@/utils'
import { notFound } from 'next/navigation'

interface Params {
  /** Unique identifier for the resource. */
  id: string
}

interface Props {
  /** Parameters for the nft detail page, including the unique identifier. */
  params: Params
}

function NftDetailPage({ params }: Props) {
  const nft = nfts.find((nft) => nft.id === params.id)
  if (!nft) notFound()

  return (
    <main>
      <div className='nft__section__cover'>
        <ResponsiveCover covers={nft.covers} />
      </div>
      <NFTInfoSection nft={nft.info} />
      <MoreFromArtistSection nfts={nft.nfts} />
    </main>
  )
}

export default NftDetailPage
