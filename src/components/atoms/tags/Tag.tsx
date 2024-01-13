import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  className?: string
}

function Tag({ children, className }: Props) {
  return <div className={clsx('tag', className)}>{children}</div>
}

export default Tag
