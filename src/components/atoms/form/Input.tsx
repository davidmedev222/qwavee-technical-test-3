import clsx from 'clsx'
import { forwardRef } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Additional CSS classes to apply to the input element */
  className?: string
  /** Variant of the input for different styling options */
  variant?: 'search'
  /** Element to be displayed as an icon on the left side of the input */
  iconLeft?: JSX.Element
  /** Element to be displayed as an icon on the right side of the input */
  iconRight?: JSX.Element
}

const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { className, variant, iconLeft, iconRight, ...rest }: Props,
  ref
) {
  const classes = {
    inputWithIcon: clsx('input__icon', className),
    input: clsx(
      'input',
      variant === 'search' && 'input--search',
      iconLeft && 'input__icon--left',
      iconRight && 'input__icon--right',
      className
    )
  }

  if (iconLeft || iconRight) {
    return (
      <div className={classes.inputWithIcon}>
        <input ref={ref} className={classes.input} {...rest} />
        {iconLeft && iconLeft}
        {iconRight && iconRight}
      </div>
    )
  }

  return <input ref={ref} className={classes.input} {...rest} />
})

export default Input
