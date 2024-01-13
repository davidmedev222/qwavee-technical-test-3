import { MoreFromArtistSection, NFTInfoSection, ResponsiveCover } from '@/components'
import { nfts } from '@/utils'
import { notFound } from 'next/navigation'

interface Params {
  id: string
}

interface Props {
  params: Params
}

function NftDetailPage({ params }: Props) {
  const nft = nfts.find((nft) => nft.id === params.id)
  if (!nft) notFound()

  return (
    <main>
      <ResponsiveCover covers={nft.covers} />
      <NFTInfoSection nft={nft.info} />
      <MoreFromArtistSection nfts={nft.nfts} />
    </main>
  )
}

export default NftDetailPage
