import clsx from 'clsx'

interface Props {
  className?: string
  cta?: JSX.Element
}

function AuctionTimerCard({ className, cta }: Props) {
  return (
    <article className={clsx('auction', className)}>
      <header className='auction__header'>
        <p className='auction__description'>Auction ends in:</p>
        <div className='auction__timer'>
          <span className='auction__timer__value'>59</span>
          <span className='auction__timer__label'>Hours</span>
        </div>
        <div className='auction__timer'>:</div>
        <div className='auction__timer'>
          <span className='auction__timer__value'>59</span>
          <span className='auction__timer__label'>Minutes</span>
        </div>
        <span className='auction__timer'>:</span>
        <div className='auction__timer'>
          <span className='auction__timer__value'>59</span>
          <span className='auction__timer__label'>Seconds</span>
        </div>
      </header>
      {cta && cta}
    </article>
  )
}

export default AuctionTimerCard
