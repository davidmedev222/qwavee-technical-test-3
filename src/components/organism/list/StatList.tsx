import { Stats } from '@/models'
import clsx from 'clsx'

interface Props {
  /** Optional CSS class name */
  className?: string
  /** Array of statistics data */
  stats: Stats[]
}

function StatList({ className, stats }: Props) {
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
