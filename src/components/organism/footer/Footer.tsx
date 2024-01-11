import { InfoSocialCard, Logo, NavFooter, SubscribeForm } from '@/components'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__info'>
          <Logo size='lg' />
          <p className='footer__info__description'>NFT marketplace UI created with Anima for Figma.</p>
          <InfoSocialCard />
        </div>
        <NavFooter />
        <div className='footer__subscribe'>
          <h6 className='footer__subscribe__title'>Join Our Weekly Digest</h6>
          <p className='footer__subscribe__description'>Get exclusive promotions & updates straight to your inbox.</p>
          <SubscribeForm variant='footer' />
        </div>
        <div className='footer__copyright'>
          <div className='footer__copyright__divider' />
          <p className='footer__copyright__description'>Ⓒ NFT Market. Use this template freely.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
