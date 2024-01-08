import { ButtonLink, HighlightNFTCard, RocketIcon, StatList } from '@/components'
import { Routes } from '@/utils'

function HeroSection() {
  return (
    <section className='hero'>
      <div className='hero__info'>
        <h1 className='hero__title'>Discover digital art & Collect NFTs</h1>
        <p className='hero__description'>
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
        </p>
      </div>
      <HighlightNFTCard className='hero__highlight' />
      <ButtonLink className='hero__btn' href={Routes.CreateAccount}>
        <RocketIcon />
        Get Started
      </ButtonLink>
      <StatList className='hero__stats' />
    </section>
  )
}

export default HeroSection
