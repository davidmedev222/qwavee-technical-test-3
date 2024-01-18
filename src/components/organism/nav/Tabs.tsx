'use client'
import { TabLink } from '@/components'
import clsx from 'clsx'
import { useState } from 'react'

interface Tab {
  /** Unique identifier for the tab */
  id: string
  /** Display title for the tab */
  title: string
  /** URL fragment to link to when the tab is active */
  href: string
  /** Optional badge number to display on the tab */
  badge?: number
  /** The content to be displayed when the tab is active */
  content: React.ReactNode
}

interface Props {
  /** Array of tab objects to be rendered in the Tabs component */
  tabs: Tab[]
}

function Tabs({ tabs }: Props) {
  const firstTab = tabs[0].id
  const [activeTab, setActiveTab] = useState(firstTab)

  /**
   * Changes the active tab to the one specified by `tabID`.
   *
   * @param tabID The identifier of the tab to be activated.
   */
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
