import { Images } from '@/models'
import clsx from 'clsx'
import Image from 'next/image'

interface Props {
  images: Images
}

function UserProfileCover({ images }: Props) {
  return (
    <div className='cover__user'>
      {images.covers.map((image, index) => (
        <Image
          key={index}
          className={clsx('cover__user__image', `cover__user__image--${image.type}`)}
          src={image.src}
          alt={image.alt}
          fill
          sizes='100vw'
        />
      ))}
      <Image className='cover__user__avatar' src={images.avatar} alt='user avatar' width={120} height={120} />
    </div>
  )
}

export default UserProfileCover
