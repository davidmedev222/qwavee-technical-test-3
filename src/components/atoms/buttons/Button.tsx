import clsx from 'clsx'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** React node(s) to be rendered inside the button */
  children: React.ReactNode
  /** Additional CSS classes to apply to the button */
  className?: string
  /** Variant of the button for different styling options */
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
