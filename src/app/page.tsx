import {
  BrowseCategoriesSection,
  DisoverMoreNFTSection,
  HeroSection,
  HighlightNFTSection,
  TopCreatorsSection,
  TrendingCollectionSection
} from '@/components'

function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrendingCollectionSection />
      <TopCreatorsSection />
      <BrowseCategoriesSection />
      <DisoverMoreNFTSection />
      <HighlightNFTSection />
    </main>
  )
}

export default HomePage
