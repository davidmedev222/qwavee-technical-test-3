import Image from 'next/image'

interface Info {
  /** URL of the image */
  image: string
  /** Alternative text for the image */
  imageAlt: string
  /** Title of the card */
  title: string
  /** Description of the card */
  description: string
}

interface Props {
  /** The information object containing details for the InfoCard */
  info: Info
}

function InfoCard({ info }: Props) {
  return (
    <article className='info'>
      <Image className='info__image' src={info.image} alt={info.imageAlt} width={250} height={250} />
      <header className='info__header'>
        <h6 className='info__title'>{info.title}</h6>
        <p className='info__description'>{info.description}</p>
      </header>
    </article>
  )
}

export default InfoCard
