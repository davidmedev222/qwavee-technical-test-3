import { RankingTableList, Tabs, TopRankingSection } from '@/components'

function RankingsPage() {
  return (
    <main>
      <TopRankingSection />
      <Tabs
        tabs={[
          { id: '1', title: '1d', href: '1d', content: <RankingTableList /> },
          { id: '2', title: '7d', href: '7d', content: <RankingTableList /> },
          { id: '3', title: '30d', href: '30d', content: <RankingTableList /> },
          { id: '4', title: 'All', href: 'all', content: <RankingTableList /> }
        ]}
      />
    </main>
  )
}

export default RankingsPage
