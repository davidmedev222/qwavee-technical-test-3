import { stats } from '@/utils'
import clsx from 'clsx'

interface Props {
  className?: string
}

function StatList({ className }: Props) {
  return (
    <ul className={clsx('stats', className)}>
      {stats.map(({ value, title }) => (
        <li className='stats__item' key={title}>
          <span className='stats__value'>{value}</span>
          {title}
        </li>
      ))}
    </ul>
  )
}

export default StatList
