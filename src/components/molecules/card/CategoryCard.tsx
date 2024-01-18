import Image from 'next/image'

interface Category {
  /** The title of the category. */
  title: string
  /** Function that returns the icon component for the category. */
  icon: () => JSX.Element
  /** Image URL for the category. */
  image: string
}

interface Props {
  /** Category object with title, icon function, and image URL. */
  category: Category
}

function CategoryCard({ category }: Props) {
  return (
    <article className='category'>
      <header className='category__header'>
        <Image
          fill
          className='category__img'
          src={category.image}
          alt='nft category image'
          sizes='(max-width: 638px) 50vw, (max-width: 835px) 33vw, 25vw'
        />
        <div className='category__backdrop'>
          <category.icon />
        </div>
      </header>
      <footer className='category__footer'>
        <h5 className='category__title'>{category.title}</h5>
      </footer>
    </article>
  )
}

export default CategoryCard
