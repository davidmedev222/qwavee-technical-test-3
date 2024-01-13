import { Tag } from '@/components'
import clsx from 'clsx'

interface Props {
  tags: string[]
  className?: string
}

function TagList({ tags, className }: Props) {
  return (
    <ul className={clsx('tag__list', className)}>
      {tags.map((tag, index) => (
        <li className='tag__list__item' key={index}>
          <Tag>{tag}</Tag>
        </li>
      ))}
    </ul>
  )
}

export default TagList
