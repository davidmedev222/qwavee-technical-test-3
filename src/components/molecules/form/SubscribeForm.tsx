import { Button } from '@/components'
import EmailIcon from '@/components/atoms/icons/EmailIcon'
import clsx from 'clsx'

interface Props {
  className?: string
  variant?: 'footer'
}

function SubscribeForm({ className, variant }: Props) {
  return (
    <form className={clsx('newsletter__form', variant === 'footer' && 'newsletter__form--footer', className)}>
      <input className='newsletter__form__input' type='email' placeholder='Enter Your Email Here' required />
      <Button type='submit'>
        <EmailIcon />
        Subscribe
      </Button>
    </form>
  )
}

export default SubscribeForm
