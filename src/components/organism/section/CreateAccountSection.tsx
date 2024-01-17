import { CreateAccountForm, ResponsiveCover } from '@/components'

function CreateAccountSection() {
  return (
    <section className='connection__section'>
      <div className='connection__section__covers'>
        <ResponsiveCover
          covers={[
            { src: '/assets/ca-img.png', alt: 'Aerial image', type: 'mobile' },
            { src: '/assets/ca-img2.png', alt: 'Aerial image', type: 'tablet' },
            { src: '/assets/ca-img3.png', alt: 'Aerial image', type: 'desktop' }
          ]}
        />
      </div>
      <CreateAccountForm />
    </section>
  )
}

export default CreateAccountSection
