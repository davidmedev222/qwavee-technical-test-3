import Image from 'next/image'

interface Category {
  title: string
  icon: () => JSX.Element
  image: string
}

interface Props {
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
