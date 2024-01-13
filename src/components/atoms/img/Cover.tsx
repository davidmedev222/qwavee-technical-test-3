import Image from 'next/image'

function Cover() {
  return (
    <div className='cover'>
      <Image
        className='cover__img cover__img--mobile'
        src='/assets/nft-cover-mobile.png'
        alt='nft cover'
        fill
        sizes='100vw'
      />
      <Image
        className='cover__img cover__img--tablet'
        src='/assets/nft-cover-tablet.png'
        alt='nft cover'
        fill
        sizes='100vw'
      />
      <Image
        className='cover__img cover__img--desktop'
        src='/assets/nft-cover-desktop.png'
        alt='nft cover'
        fill
        sizes='100vw'
      />
    </div>
  )
}

export default Cover
