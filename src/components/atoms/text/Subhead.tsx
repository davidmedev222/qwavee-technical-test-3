import clsx from 'clsx'

interface Props {
  /** The content to be displayed within the subhead */
  children: React.ReactNode
  /** Optional CSS class name for additional styling */
  className?: string
}

function Subhead({ children, className }: Props) {
  return <p className={clsx('subhead', className)}>{children}</p>
}

export default Subhead
