import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  className?: string
  title: string
}

function InfoDetailCard({ children, className, title }: Props) {
  return (
    <div className={clsx('info__detail', className)}>
      <h3 className='info__detail__title'>{title}</h3>
      {children}
    </div>
  )
}

export default InfoDetailCard
