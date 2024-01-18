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
import { NftInfo } from '@/models'
import Link from 'next/link'

interface Props {
  /** Information about the NFT */
  nft: NftInfo
}

function NFTInfoSection({ nft }: Props) {
  return (
    <section className='nft__section'>
      <div className='nft__section__info'>
        <Heading className='nft__section__title'>{nft.title}</Heading>
        <Subhead className='nft__section__subhead'>{nft.date}</Subhead>
      </div>
      <AuctionTimerCard className='nft__section__timer' cta={<Button>Place bid</Button>} />
      <InfoDetailCard title='Created By'>
        <Link href='/artist/1'>
          <UserPreview className='nft__section__user' user={nft.author} />
        </Link>
      </InfoDetailCard>
      <InfoDetailCard title='Description' titleAs='h3'>
        <p className='nft__section__description'>{nft.description}</p>
      </InfoDetailCard>
      <InfoDetailCard title='Details' titleAs='h4'>
        {nft.links.map((link) => (
          <Link className='nft__section__link' href={link.url} target='_blank' key={link.title} rel='noreferrer'>
            <GlobeIcon /> {link.title}
          </Link>
        ))}
      </InfoDetailCard>
      <InfoDetailCard title='Tags' titleAs='h5'>
        <TagList tags={nft.tags} />
      </InfoDetailCard>
    </section>
  )
}

export default NFTInfoSection
