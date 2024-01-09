import { CollectionCardList } from '@/components'

function TrendingCollectionSection() {
  return (
    <section className='trending'>
      <div className='trending__info'>
        <h2 className='trending__title'>Trending Collection</h2>
        <p className='trending__description'>Checkout our weekly updated trending collection.</p>
      </div>
      <CollectionCardList />
    </section>
  )
}

export default TrendingCollectionSection
