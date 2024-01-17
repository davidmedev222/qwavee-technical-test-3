import { ConnectWalletCard, ResponsiveCover } from '@/components'

function ConnectWalletSection() {
  return (
    <section className='connection__section'>
      <div className='connection__section__covers'>
        <ResponsiveCover
          covers={[
            { src: '/assets/cw-img.png', alt: 'Aerial image', type: 'mobile' },
            { src: '/assets/cw-img2.png', alt: 'Aerial image', type: 'tablet' },
            { src: '/assets/cw-img3.png', alt: 'Aerial image', type: 'desktop' }
          ]}
        />
      </div>
      <ConnectWalletCard />
    </section>
  )
}

export default ConnectWalletSection
