import { ArtistCardList, ButtonLink, Heading, RocketIcon, Subhead } from '@/components'
import { Routes } from '@/utils'

function TopCreatorsSection() {
  return (
    <section className='creators'>
      <div className='creators__info'>
        <Heading className='creators__title' as='h3'>
          Top Creators
        </Heading>
        <Subhead className='creators__description'>Checkout Top Rated Creators on the NFT Marketplace</Subhead>
      </div>
      <ArtistCardList className='creators__artists' />
      <ButtonLink className='creators__btn' variant='outlined' href={Routes.Rankings}>
        <RocketIcon />
        View Rankings
      </ButtonLink>
    </section>
  )
}

export default TopCreatorsSection
