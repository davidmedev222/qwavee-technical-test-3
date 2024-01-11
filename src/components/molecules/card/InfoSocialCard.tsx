import { socialIcons } from '@/utils'
import Link from 'next/link'

function InfoSocialCard() {
  return (
    <article className='info__social'>
      <h6 className='info__social__title'>Join our community</h6>
      <div className='info__social__icons'>
        {socialIcons.map((social) => (
          <Link key={social.title} href={social.url} target='_blank' rel='noreferrer'>
            <social.icon />
          </Link>
        ))}
      </div>
    </article>
  )
}

export default InfoSocialCard
