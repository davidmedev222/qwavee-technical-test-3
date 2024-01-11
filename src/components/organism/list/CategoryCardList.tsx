import { CategoryCard } from '@/components'
import { categories } from '@/utils'

function CategoryCardList() {
  return (
    <ul className='category__list'>
      {categories.map((category) => (
        <li className='category__list__item' key={category.title}>
          <CategoryCard category={category} />
        </li>
      ))}
    </ul>
  )
}

export default CategoryCardList
