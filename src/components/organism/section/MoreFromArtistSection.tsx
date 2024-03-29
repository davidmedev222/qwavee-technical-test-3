import { ArrowIcon, ButtonLink, Heading, NFTCardList } from '@/components'
import { Nft } from '@/models'

interface Props {
  /** Array of NFT objects to be displayed */
  nfts: Nft[]
}

function MoreFromArtistSection({ nfts }: Props) {
  return (
    <section className='moreartist__section'>
      <Heading className='moreartist__section__title'>More from this artist</Heading>
      <NFTCardList className='moreartist__section__nfts' nfts={nfts} />
      <ButtonLink className='moreartist__section__btn' variant='outlined' href='/artist/1'>
        <ArrowIcon />
        Go To Artist Page
      </ButtonLink>
    </section>
  )
}

export default MoreFromArtistSection
