import { ButtonLink, EyeIcon, Heading, NFTCardList, Subhead } from '@/components'
import { Routes, discoverMoreNfts } from '@/utils'

function DisoverMoreNFTSection() {
  return (
    <section className='discover'>
      <div className='discover__info'>
        <Heading className='discover__title' as='h5'>
          Discover More NFTs
        </Heading>
        <Subhead className='discover__description'>Explore new trending NFTs</Subhead>
      </div>
      <NFTCardList className='discover__nfts' nfts={discoverMoreNfts} />
      <ButtonLink className='discover__btn' variant='outlined' href={Routes.Marketplace}>
        <EyeIcon />
        See All
      </ButtonLink>
    </section>
  )
}

export default DisoverMoreNFTSection
