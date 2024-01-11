import { CollectionCardList, Heading, Subhead } from '@/components'

function TrendingCollectionSection() {
  return (
    <section className='trending'>
      <div className='trending__info'>
        <Heading className='trending__title' as='h2'>
          Trending Collection
        </Heading>
        <Subhead className='trending__description'>Checkout our weekly updated trending collection.</Subhead>
      </div>
      <CollectionCardList />
    </section>
  )
}

export default TrendingCollectionSection
