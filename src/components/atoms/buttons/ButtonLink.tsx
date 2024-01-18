import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'

interface Props extends LinkProps {
  /** React node(s) to be rendered inside the button */
  children: React.ReactNode
  /** Additional CSS classes to apply to the custom link */
  className?: string
  /** Variant of the custom link for different styling options */
  variant?: 'outlined' | 'light'
}

function ButtonLink({ children, className, variant, ...rest }: Props) {
  return (
    <Link
      className={clsx(
        'button',
        variant === 'outlined' && 'button--outlined',
        variant === 'light' && 'button--light',
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  )
}

export default ButtonLink
