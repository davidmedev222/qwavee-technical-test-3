import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  className?: string
}

function Subhead({ children, className }: Props) {
  return <p className={clsx('subhead', className)}>{children}</p>
}

export default Subhead
