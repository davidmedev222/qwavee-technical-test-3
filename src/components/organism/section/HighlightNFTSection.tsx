import { AuctionTimerCard, ButtonLink, EyeIcon, Heading, UserPreview } from '@/components'
import { Routes } from '@/utils'
import Image from 'next/image'

function HighlightNFTSection() {
  return (
    <section className='highlight__section'>
      <Image
        className='highlight__section__bg highlight__section__bg--mobile'
        src='/assets/hn-img-mobile.png'
        alt='highlight NFT background'
        fill
        sizes='100vw'
      />
      <Image
        className='highlight__section__bg highlight__section__bg--tablet'
        src='/assets/hn-img-tablet.png'
        alt='highlight NFT background'
        fill
        sizes='100vw'
      />
      <Image
        className='highlight__section__bg highlight__section__bg--desktop'
        src='/assets/hn-img-desktop.png'
        alt='highlight NFT background'
        fill
        sizes='100vw'
      />
      <div className='highlight__section__content'>
        <UserPreview
          className='highlight__section__user'
          user={{ avatar: '/assets/hero-avatar.png', username: 'Animakid' }}
        />
        <Heading className='highlight__section__title' as='h6'>
          Magic Mashrooms
        </Heading>
        <AuctionTimerCard className='highlight__section__timer' />
        <ButtonLink className='highlight__section__btn' variant='light' href={Routes.Marketplace}>
          <EyeIcon />
          See NFT
        </ButtonLink>
      </div>
    </section>
  )
}

export default HighlightNFTSection
