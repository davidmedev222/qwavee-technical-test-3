import { ArtistCardList, ButtonLink, RocketIcon } from '@/components'
import { Routes } from '@/utils'

function TopCreatorsSection() {
  return (
    <section className='creators'>
      <div className='creators__info'>
        <h3 className='creators__title'>Top Creators</h3>
        <p className='creators__description'>Checkout Top Rated Creators on the NFT Marketplace</p>
      </div>
      <ArtistCardList className='creators__artists' />
      <ButtonLink className='creators__btn' href={Routes.Rankings}>
        <RocketIcon />
        View Rankings
      </ButtonLink>
    </section>
  )
}

export default TopCreatorsSection
