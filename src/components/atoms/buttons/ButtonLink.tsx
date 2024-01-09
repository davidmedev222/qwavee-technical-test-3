import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'

interface Props extends LinkProps {
  children: React.ReactNode
  className?: string
  variant?: 'outlined'
}

function ButtonLink({ children, className, variant, ...rest }: Props) {
  return (
    <Link className={clsx('button', variant === 'outlined' && 'button--outlined', className)} {...rest}>
      {children}
    </Link>
  )
}

export default ButtonLink
