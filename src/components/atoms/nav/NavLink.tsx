import Link, { LinkProps } from 'next/link'

interface Props extends LinkProps {
  /** The content to be displayed inside the link */
  children: React.ReactNode
  /** Custom CSS class for additional styling */
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
