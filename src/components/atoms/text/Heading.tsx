import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

function Heading({ children, className, as = 'h1' }: Props) {
  const DynamicTag = as

  return <DynamicTag className={clsx('heading', className)}>{children}</DynamicTag>
}

export default Heading
