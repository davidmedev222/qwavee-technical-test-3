import clsx from 'clsx'
import Image from 'next/image'

interface Props {
  className?: string
}

function HighlightNFTCard({ className }: Props) {
  return (
    <article className={clsx('highlight', className)}>
      <Image className='highlight__image' src='/assets/hero-img.png' alt='image NFT' width={510} height={401} />
      <footer className='highlight__footer'>
        <h2 className='highlight__title'>Space Walking</h2>
        <div className='highlight__artist'>
          <Image className='highlight__avatar' src='/assets/hero-avatar.png' alt='avatar NFT' width={24} height={24} />
          <span className='highlight__name'>Animakid</span>
        </div>
      </footer>
    </article>
  )
}

export default HighlightNFTCard
