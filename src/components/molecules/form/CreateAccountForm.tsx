import { Button, EmailIcon, Input, LockKeyIcon, Subhead, UserIcon } from '@/components'

function CreateAccountForm() {
  return (
    <form className='create__form'>
      <header className='create__form__header'>
        <h1 className='create__form__title'>Create Account</h1>
        <Subhead className='create__form__description'>
          Welcome! enter your details and start creating, collecting and selling NFTs.
        </Subhead>
      </header>
      <div className='create__form__inputs'>
        <Input type='text' placeholder='Username' icon={<UserIcon />} required />
        <Input type='email' placeholder='Email Address' icon={<EmailIcon />} required />
        <Input type='password' placeholder='Password' icon={<LockKeyIcon />} required />
        <Input type='password' placeholder='Confirm Password' icon={<LockKeyIcon />} required />
        <Button className='create__form__btn' type='submit'>
          Create Account
        </Button>
      </div>
    </form>
  )
}

export default CreateAccountForm
