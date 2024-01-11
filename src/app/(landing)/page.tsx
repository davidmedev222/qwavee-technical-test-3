import {
  BrowseCategoriesSection,
  DisoverMoreNFTSection,
  HeroSection,
  HighlightNFTSection,
  HowItWorksSection,
  NewsletterSection,
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
      <NewsletterSection />
    </main>
  )
}

export default HomePage
