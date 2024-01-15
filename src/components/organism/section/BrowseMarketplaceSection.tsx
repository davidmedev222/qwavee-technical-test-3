import { Heading, Input, SearchIcon, Subhead } from '@/components'

function BrowseMarketplaceSection() {
  return (
    <section className='marketplace__section'>
      <div className='marketplace__section__info'>
        <Heading className='marketplace__section__title'>Browse Marketplace</Heading>
        <Subhead className='marketplace__section__description'>
          Browse through more than 50k NFTs on the NFT Marketplace.
        </Subhead>
      </div>
      <Input
        className='marketplace__section__input'
        placeholder='Search your favourite NFTs'
        variant='search'
        iconRight={<SearchIcon />}
        type='text'
      />
    </section>
  )
}

export default BrowseMarketplaceSection
