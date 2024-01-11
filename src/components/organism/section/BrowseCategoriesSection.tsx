import { CategoryCardList, Heading } from '@/components'

function BrowseCategoriesSection() {
  return (
    <section className='categories'>
      <Heading className='categories__title' as='h4'>
        Browse Categories
      </Heading>
      <CategoryCardList />
    </section>
  )
}

export default BrowseCategoriesSection
