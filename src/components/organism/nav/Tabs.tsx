'use client'
import { TabLink } from '@/components'
import clsx from 'clsx'
import { useState } from 'react'

interface Tab {
  id: string
  title: string
  href: string
  badge?: number
  content: React.ReactNode
}

interface Props {
  tabs: Tab[]
}

function Tabs({ tabs }: Props) {
  const firstTab = tabs[0].id
  const [activeTab, setActiveTab] = useState(firstTab)
  const changeActiveTab = (tabID: string) => setActiveTab((state) => tabID)

  return (
    <div className='tabs'>
      <nav className='tabs_navigation'>
        <div className='tabs__line' />
        <ul className='tabs__list'>
          {tabs.map((tab) => (
            <li className='tabs__item' key={tab.id}>
              <TabLink
                onClick={() => changeActiveTab(tab.id)}
                href={`#${tab.href}`}
                badge={tab.badge}
                isActive={tab.id === activeTab}
              >
                {tab.title}
              </TabLink>
            </li>
          ))}
        </ul>
      </nav>
      {tabs.map((tab) => (
        <section
          id={tab.href}
          className={clsx('tabs__content', tab.id === activeTab && 'tabs__content--active')}
          key={tab.id}
        >
          {tab.content}
        </section>
      ))}
    </div>
  )
}

export default Tabs
