function RankingHeaderTable() {
  return (
    <article className='ranking__table__header'>
      <span className='ranking__table__header__rank'>#</span>
      <span className='ranking__table__header__artist'>Artist</span>
      <span className='ranking__table__header__change'>Change</span>
      <span className='ranking__table__header__nfts'>NFTs Sold</span>
      <span className='ranking__table__header__volume'>Volume</span>
    </article>
  )
}

export default RankingHeaderTable
