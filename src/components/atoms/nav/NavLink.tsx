import Link, { LinkProps } from 'next/link'

interface Props extends LinkProps {
  children: React.ReactNode
  className: string
}

function NavLink({ className, children, ...rest }: Props) {
  return (
    <Link className={className} {...rest}>
      {children}
    </Link>
  )
}

export default NavLink
