import clsx from 'clsx'
import { forwardRef } from 'react'

type InputHTMLAtributes = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'>

interface Props extends InputHTMLAtributes {
  className?: string
  variant?: 'search'
  iconLeft?: JSX.Element
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
