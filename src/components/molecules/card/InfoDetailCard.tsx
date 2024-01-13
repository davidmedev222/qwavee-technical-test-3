import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  className?: string
  title: string
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
