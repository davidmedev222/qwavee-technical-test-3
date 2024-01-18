import clsx from 'clsx'

interface Props {
  /** The content to be displayed within the component */
  children: React.ReactNode
  /** Optional CSS class name to customize the styling */
  className?: string
}

function Tag({ children, className }: Props) {
  return <div className={clsx('tag', className)}>{children}</div>
}

export default Tag
