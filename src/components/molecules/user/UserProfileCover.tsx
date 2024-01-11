import Image from 'next/image'

function UserProfileCover() {
  return (
    <div className='cover__user'>
      <Image
        className='cover__user__image cover__user__image--mobile'
        src='/assets/ad-cover-mobile.png'
        alt='cover image'
        fill
        sizes='100vw'
      />
      <Image
        className='cover__user__image cover__user__image--tablet'
        src='/assets/ad-cover-tablet.png'
        alt='cover image'
        fill
        sizes='100vw'
      />
      <Image
        className='cover__user__image cover__user__image--desktop'
        src='/assets/ad-cover-desktop.png'
        alt='cover image'
        fill
        sizes='100vw'
      />
      <Image className='cover__user__avatar' src='/assets/ad-avatar.png' alt='user avatar' width={120} height={120} />
    </div>
  )
}

export default UserProfileCover
