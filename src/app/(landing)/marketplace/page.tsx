import { BrowseMarketplaceSection, CollectionCardList, NFTCardList, Tabs } from '@/components'
import { browseMarketplace } from '@/utils'

function MarketplacePage() {
  return (
    <main>
      <BrowseMarketplaceSection />
      <Tabs
        tabs={[
          { id: '1', title: 'NFTs', href: 'nfts', badge: 302, content: <NFTCardList nfts={browseMarketplace.nfts} /> },
          {
            id: '2',
            title: 'Collections',
            href: 'collections',
            badge: 67,
            content: <CollectionCardList />
          }
        ]}
      />
    </main>
  )
}

export default MarketplacePage
