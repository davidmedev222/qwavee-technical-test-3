import { Button } from '@/components'
import EmailIcon from '@/components/atoms/icons/EmailIcon'
import clsx from 'clsx'

interface Props {
  className?: string
}

function SubscribeForm({ className }: Props) {
  return (
    <form className={clsx('newsletter__form', className)}>
      <input className='newsletter__form__input' type='email' placeholder='Enter Your Email Here' required />
      <Button type='submit'>
        <EmailIcon />
        Subscribe
      </Button>
    </form>
  )
}

export default SubscribeForm
