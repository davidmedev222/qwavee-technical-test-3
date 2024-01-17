import { ResponsiveCover } from '@/components'
import { Images } from '@/models'
import Image from 'next/image'

interface Props {
  images: Images
}

function UserProfileCover({ images }: Props) {
  return (
    <div className='cover__user'>
      <ResponsiveCover className='cover__user__image' covers={images.covers} />
      <Image className='cover__user__avatar' src={images.avatar} alt='user avatar' width={120} height={120} />
    </div>
  )
}

export default UserProfileCover
