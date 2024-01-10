import { Heading, InfoCardList, Subhead } from '@/components'

function HowItWorksSection() {
  return (
    <section className='works__section'>
      <div className='works__section__info'>
        <Heading className='works__section__title' as='h6'>
          How it works
        </Heading>
        <Subhead className='works__section__description'>Find out how to get started</Subhead>
      </div>
      <InfoCardList />
    </section>
  )
}

export default HowItWorksSection
