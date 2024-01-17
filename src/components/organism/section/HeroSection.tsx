import { ButtonLink, Heading, HighlightNFTCard, RocketIcon, StatList, Subhead } from '@/components'
import { Routes, stats } from '@/utils'
import Link from 'next/link'

function HeroSection() {
  return (
    <section className='hero'>
      <div className='hero__info'>
        <Heading className='hero__title'>Discover digital art & Collect NFTs</Heading>
        <Subhead className='hero__description'>
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
        </Subhead>
      </div>
      <Link href='/artist/1' className='hero__highlight'>
        <HighlightNFTCard />
      </Link>
      <ButtonLink className='hero__btn' href={Routes.CreateAccount}>
        <RocketIcon />
        Get Started
      </ButtonLink>
      <StatList className='hero__stats' stats={stats} />
    </section>
  )
}

export default HeroSection
