import Link, { LinkProps } from 'next/link'

interface Props extends LinkProps {
  children: React.ReactNode
}

function ButtonLink({ children, ...rest }: Props) {
  return (
    <Link className='button' {...rest}>
      {children}
    </Link>
  )
}

export default ButtonLink
