import clsx from 'clsx'
import { forwardRef } from 'react'

type InputHTMLAtributes = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'>

interface Props extends InputHTMLAtributes {
  className?: string
  icon?: JSX.Element
}

const Input = forwardRef<HTMLInputElement, Props>(function Input({ className, icon, ...rest }: Props, ref) {
  const classes = {
    inputWithIcon: clsx('input--icon', className),
    input: clsx('input', icon && 'input--with-icon', className)
  }

  if (icon) {
    return (
      <div className={classes.inputWithIcon}>
        {icon}
        <input ref={ref} className={classes.input} {...rest} />
      </div>
    )
  }

  return <input ref={ref} className={classes.input} {...rest} />
})

export default Input
