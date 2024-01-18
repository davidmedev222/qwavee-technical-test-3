import clsx from 'clsx'

interface Props {
  /** The content to be displayed within the heading */
  children: React.ReactNode
  /** Additional CSS classes to apply to the heading */
  className?: string
  /** The heading level to use, from h1 to h6 */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

function Heading({ children, className, as = 'h1' }: Props) {
  const DynamicTag = as

  return <DynamicTag className={clsx('heading', className)}>{children}</DynamicTag>
}

export default Heading
