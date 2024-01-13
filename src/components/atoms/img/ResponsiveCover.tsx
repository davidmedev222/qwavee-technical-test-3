import { Cover } from '@/models'
import clsx from 'clsx'
import Image from 'next/image'

interface Props {
  covers: Cover[]
}

function ResponsiveCover({ covers }: Props) {
  return (
    <div className='cover'>
      {covers.map((cover, index) => (
        <Image
          key={index}
          className={clsx('cover__img', `cover__img--${cover.type}`)}
          src={cover.src}
          alt={cover.alt}
          fill
          sizes='100vw'
        />
      ))}
    </div>
  )
}

export default ResponsiveCover
