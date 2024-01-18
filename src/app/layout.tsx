import { Footer, Header } from '@/components'
import '@/styles/index.scss'
import { baseMetadata, spaceMono, workSans } from '@/utils'
import clsx from 'clsx'

export const metadata = {
  ...baseMetadata
}

interface Props {
  /** The children of the component. */
  children: React.ReactNode
}

function RootLayout({ children }: Props) {
  const classes = clsx(workSans.className, workSans.variable, spaceMono.variable)

  return (
    <html lang='en'>
      <body className={classes}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
