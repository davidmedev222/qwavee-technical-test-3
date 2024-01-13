import clsx from 'clsx'
import Image from 'next/image'

interface User {
  avatar: string
  username: string
}

interface Props {
  user: User
  className?: string
}

function UserPreview({ user, className }: Props) {
  return (
    <div className={clsx('user_preview', className)}>
      <Image className='user_preview__avatar' src={user.avatar} alt='avatar NFT' width={24} height={24} />
      <span className='user_preview__name'>{user.username}</span>
    </div>
  )
}

export default UserPreview
