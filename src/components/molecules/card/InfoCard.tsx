import Image from 'next/image'

interface Info {
  image: string
  imageAlt: string
  title: string
  description: string
}

interface Props {
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
