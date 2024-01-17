import { Tag } from '@/components'
import clsx from 'clsx'
import Link from 'next/link'

interface Props {
  tags: string[]
  className?: string
}

function TagList({ tags, className }: Props) {
  return (
    <ul className={clsx('tag__list', className)}>
      {tags.map((tag, index) => (
        <li className='tag__list__item' key={index}>
          <Link href='/marketplace'>
            <Tag>{tag}</Tag>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default TagList
