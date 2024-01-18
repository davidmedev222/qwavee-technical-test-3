import { Button, Input } from '@/components'
import EmailIcon from '@/components/atoms/icons/EmailIcon'
import clsx from 'clsx'

interface Props {
  /** Additional CSS classes to apply to the component */
  className?: string
  /** Variant of the subscribe form, e.g., for the footer */
  variant?: 'footer'
}

function SubscribeForm({ className, variant }: Props) {
  return (
    <form className={clsx('newsletter__form', variant === 'footer' && 'newsletter__form--footer', className)}>
      <Input
        className='newsletter__form__input'
        type='email'
        placeholder='Enter Your Email Here'
        required
        minLength={5}
        maxLength={50}
      />
      <Button type='submit'>
        <EmailIcon />
        Subscribe
      </Button>
    </form>
  )
}

export default SubscribeForm
