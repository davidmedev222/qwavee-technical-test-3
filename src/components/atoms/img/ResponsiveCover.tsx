import { Cover } from '@/models'
import clsx from 'clsx'
import Image from 'next/image'

interface Props {
  /** Array of cover objects to be displayed */
  covers: Cover[]
  /** Optional CSS class name for additional styling */
  className?: string
}

function ResponsiveCover({ covers, className }: Props) {
  return (
    <>
      {covers.map((cover, index) => (
        <Image
          key={index}
          className={clsx('cover', `cover--${cover.type}`, className)}
          src={cover.src}
          alt={cover.alt}
          fill
          sizes='100vw'
        />
      ))}
    </>
  )
}

export default ResponsiveCover
