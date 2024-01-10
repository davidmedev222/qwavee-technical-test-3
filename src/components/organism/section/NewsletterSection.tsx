import { Heading, Subhead, SubscribeForm } from '@/components'
import Image from 'next/image'

function NewsletterSection() {
  return (
    <section className='newsletter__section'>
      <Image
        className='newsletter__section__img'
        src='/assets/n-img.png'
        alt='newsletter image'
        width={425}
        height={310}
      />
      <div className='newsletter__section__info'>
        <Heading className='newsletter__section__title' as='h6'>
          Join Our Weekly digest
        </Heading>
        <Subhead className='newsletter__section__description'>
          Get exclusive promotions & updates straight to your inbox.
        </Subhead>
      </div>
      <SubscribeForm className='newsletter__section__form' />
    </section>
  )
}

export default NewsletterSection
