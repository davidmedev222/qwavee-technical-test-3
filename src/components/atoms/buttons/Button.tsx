import clsx from 'clsx'

type ButtonHTMLAttributes = React.ButtonHTMLAttributes<HTMLButtonElement>

interface Props extends ButtonHTMLAttributes {
  children: React.ReactNode
  className?: string
  variant?: 'outlined' | 'light' | 'wallet'
}

function Button({ children, className, variant, ...rest }: Props) {
  return (
    <button
      className={clsx(
        'button',
        variant === 'outlined' && 'button--outlined',
        variant === 'light' && 'button--light',
        variant === 'wallet' && 'button--wallet',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
