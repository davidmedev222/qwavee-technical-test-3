import {
  BrowseCategoriesSection,
  DisoverMoreNFTSection,
  HeroSection,
  HighlightNFTSection,
  HowItWorksSection,
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
      <HowItWorksSection />
    </main>
  )
}

export default HomePage
