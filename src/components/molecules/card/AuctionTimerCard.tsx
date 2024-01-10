import clsx from 'clsx'

interface Props {
  className?: string
}

function AuctionTimerCard({ className }: Props) {
  return (
    <article className={clsx('auction', className)}>
      <p className='auction__description'>Auction ends in:</p>
      <footer className='auction__footer'>
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
      </footer>
    </article>
  )
}

export default AuctionTimerCard
