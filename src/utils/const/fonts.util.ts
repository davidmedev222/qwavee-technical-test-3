import { Space_Mono, Work_Sans } from 'next/font/google'

export const workSans = Work_Sans({
  display: 'swap',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-work-sans'
})

export const spaceMono = Space_Mono({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono'
})
