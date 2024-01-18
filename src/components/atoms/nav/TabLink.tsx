import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'

interface Props extends LinkProps {
  /** React node elements to be rendered inside the link */
  children: React.ReactNode
  /** Optional CSS class name to customize the styling */
  className?: string
  /** Determines if the link is currently active */
  isActive?: boolean
  /** Optional badge number to be displayed on the link */
  badge?: number
}

function TabLink({ className, children, isActive, badge, ...rest }: Props) {
  return (
    <Link className={clsx('tab__link', isActive && 'tab__link--active', className)} {...rest}>
      {children}
      {badge && <span className={clsx('tab__link__badge', isActive && 'tab__link__badge--active')}>{badge}</span>}
    </Link>
  )
}

export default TabLink
