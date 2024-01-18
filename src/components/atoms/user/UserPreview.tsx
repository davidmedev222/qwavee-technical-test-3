import clsx from 'clsx'
import Image from 'next/image'

interface User {
  /** URL of the user's avatar image */
  avatar: string
  /** The user's display name */
  username: string
}

interface Props {
  /** The user object containing user details */
  user: User
  /** Optional CSS class names to customize the styling */
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
