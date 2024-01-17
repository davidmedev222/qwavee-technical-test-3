import { CategoryCard } from '@/components'
import { categories } from '@/utils'
import Link from 'next/link'

function CategoryCardList() {
  return (
    <ul className='category__list'>
      {categories.map((category) => (
        <li className='category__list__item' key={category.title}>
          <Link href='/marketplace'>
            <CategoryCard category={category} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default CategoryCardList
