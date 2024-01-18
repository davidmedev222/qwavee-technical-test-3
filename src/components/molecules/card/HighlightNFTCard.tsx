import { UserPreview } from '@/components'
import clsx from 'clsx'
import Image from 'next/image'

interface Props {
  /** Optional CSS class name to customize the styling */
  className?: string
}

function HighlightNFTCard({ className }: Props) {
  return (
    <article className={clsx('highlight', className)}>
      <Image className='highlight__image' src='/assets/hero-img.png' alt='image NFT' width={510} height={401} />
      <footer className='highlight__footer'>
        <h2 className='highlight__title'>Space Walking</h2>
        <UserPreview user={{ avatar: '/assets/hero-avatar.png', username: 'Animakid' }} />
      </footer>
    </article>
  )
}

export default HighlightNFTCard
