import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'

interface Props extends LinkProps {
  children: React.ReactNode
  className?: string
}

function ButtonLink({ children, className, ...rest }: Props) {
  return (
    <Link className={clsx('button', className)} {...rest}>
      {children}
    </Link>
  )
}

export default ButtonLink
