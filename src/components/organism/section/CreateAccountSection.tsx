import { CreateAccountForm } from '@/components'
import Image from 'next/image'

function CreateAccountSection() {
  return (
    <section className='connection__section'>
      <div className='connection__section__imgs'>
        <Image
          className='connection__section__img connection__section__img--mobile'
          src='/assets/ca-img.png'
          fill
          sizes='100vw'
          alt='Aerial image'
        />
        <Image
          className='connection__section__img connection__section__img--tablet'
          src='/assets/ca-img2.png'
          fill
          sizes='50vw'
          alt='Aerial image'
        />
        <Image
          className='connection__section__img connection__section__img--desktop'
          src='/assets/ca-img3.png'
          fill
          sizes='50vw'
          alt='Aerial image'
        />
      </div>
      <CreateAccountForm />
    </section>
  )
}

export default CreateAccountSection
