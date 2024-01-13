import {
  AuctionTimerCard,
  Button,
  GlobeIcon,
  Heading,
  InfoDetailCard,
  Subhead,
  TagList,
  UserPreview
} from '@/components'

function NFTInfoSection() {
  return (
    <section className='nft__section'>
      <div className='nft__section__info'>
        <Heading className='nft__section__title'>The Orbitians</Heading>
        <Subhead className='nft__section__subhead'>Minted on Sep 30, 2022</Subhead>
      </div>
      <AuctionTimerCard className='nft__section__timer' cta={<Button>Place bid</Button>} />
      <InfoDetailCard title='Created By'>
        <UserPreview
          className='nft__section__user'
          user={{ avatar: '/assets/hero-avatar.png', username: 'Dish Studio' }}
        />
      </InfoDetailCard>
      <InfoDetailCard title='Description' titleAs='h3'>
        <p className='nft__section__description'>
          {
            "The Orbitians\nis a collection of 10,000 unique NFTs on the Ethereum blockchain,\n\nThere are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.\n\nThey live in a metal space machines, high up in the sky and only have one foot on Earth.\nThese Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations.\nThe invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target."
          }
        </p>
      </InfoDetailCard>
      <InfoDetailCard title='Details' titleAs='h4'>
        <div className='nft__section__link'>
          <GlobeIcon />
          View on Etherscan
        </div>
        <div className='nft__section__link'>
          <GlobeIcon />
          View Original
        </div>
      </InfoDetailCard>
      <InfoDetailCard title='Tags' titleAs='h5'>
        <TagList tags={['Animation', 'Illustration', 'Moon', 'Moon']} />
      </InfoDetailCard>
    </section>
  )
}

export default NFTInfoSection
