import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'

interface Props extends LinkProps {
  children: React.ReactNode
  className?: string
  isActive?: boolean
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
