import { AuctionTimerCard, ButtonLink, EyeIcon, Heading, ResponsiveCover, UserPreview } from '@/components'
import Link from 'next/link'

function HighlightNFTSection() {
  return (
    <section className='highlight__section'>
      <ResponsiveCover
        className='highlight__section__cover'
        covers={[
          { src: '/assets/hn-img-mobile.png', alt: 'highlight NFT background', type: 'mobile' },
          { src: '/assets/hn-img-tablet.png', alt: 'highlight NFT background', type: 'tablet' },
          { src: '/assets/hn-img-desktop.png', alt: 'highlight NFT background', type: 'desktop' }
        ]}
      />
      <div className='highlight__section__content'>
        <Link href='/artist/1' className='highlight__section__user'>
          <UserPreview user={{ avatar: '/assets/hero-avatar.png', username: 'Animakid' }} />
        </Link>
        <Heading className='highlight__section__title' as='h6'>
          Magic Mashrooms
        </Heading>
        <AuctionTimerCard className='highlight__section__timer' />
        <ButtonLink className='highlight__section__btn' variant='light' href='/nft/1'>
          <EyeIcon />
          See NFT
        </ButtonLink>
      </div>
    </section>
  )
}

export default HighlightNFTSection
