import { Metadata } from 'next'

export const baseMetadata: Metadata = {
  title: 'David Mamani - Qwavee Technical Test 3',
  description:
    'Website created by David Mamani from a technical test dictated by the company Qwavee for the position as Frontend Developer.',
  generator: 'Next.js',
  applicationName: 'Qwavee - Technical Test 3',
  referrer: 'origin-when-cross-origin',
  keywords: ['Technical', 'Test', 'Qwavee', 'David Mamani', 'davidmedev', 'Frontend Developer', 'Website'],
  authors: [{ name: 'David Mamani', url: 'https://www.linkedin.com/in/davidmedev/' }],
  creator: 'David Mamani',
  publisher: 'David Mamani',
  category: 'technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    title: 'David Mamani - Qwavee Technical Test 3',
    description:
      'Website created by David Mamani from a technical test dictated by the company Qwavee for the position as Frontend Developer.',
    url: 'https://qwavee-technical-test-3.vercel.app/',
    siteName: 'Qwavee - Technical Test 3',
    locale: 'en',
    type: 'website'
  }
}
