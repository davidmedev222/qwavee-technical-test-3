import { AuctionTimerCard, ButtonLink, EyeIcon, Heading } from '@/components'
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
        <div className='highlight__section__artist'>
          <Image
            className='highlight__section__avatar'
            src='/assets/hero-avatar.png'
            alt='avatar NFT'
            width={24}
            height={24}
          />
          <span className='highlight__section__name'>Animakid</span>
        </div>
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
