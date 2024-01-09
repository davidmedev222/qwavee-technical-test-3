import {
  BrowseCategoriesSection,
  DisoverMoreNFTSection,
  HeroSection,
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
    </main>
  )
}

export default HomePage
