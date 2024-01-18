import clsx from 'clsx'

interface Props {
  /** Content within the InfoDetailCard component */
  children: React.ReactNode
  /** Additional CSS classes to apply to the card */
  className?: string
  /** The text to display as the card's title */
  title: string
  /** The element type to render the title as (defaults to 'h2') */
  titleAs?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

function InfoDetailCard({ children, className, title, titleAs = 'h2' }: Props) {
  const TitleTag = titleAs

  return (
    <div className={clsx('info__detail', className)}>
      <TitleTag className='info__detail__title'>{title}</TitleTag>
      {children}
    </div>
  )
}

export default InfoDetailCard
