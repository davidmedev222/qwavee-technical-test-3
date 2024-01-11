import { ConnectWalletCard } from '@/components'
import Image from 'next/image'

function ConnectWalletSection() {
  return (
    <section className='connection__section'>
      <div className='connection__section__imgs'>
        <Image
          className='connection__section__img connection__section__img--mobile'
          src='/assets/cw-img.png'
          fill
          sizes='100vw'
          alt='Aerial image'
        />
        <Image
          className='connection__section__img connection__section__img--tablet'
          src='/assets/cw-img2.png'
          fill
          sizes='50vw'
          alt='Aerial image'
        />
        <Image
          className='connection__section__img connection__section__img--desktop'
          src='/assets/cw-img3.png'
          fill
          sizes='50vw'
          alt='Aerial image'
        />
      </div>
      <ConnectWalletCard />
    </section>
  )
}

export default ConnectWalletSection
