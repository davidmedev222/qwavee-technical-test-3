'use client'
import { Logo, Nav, NavAside, NavMenu } from '@/components'
import { useToggle } from '@/hooks'

function Header() {
  const [isOpenMenu, toggleOpenMenu] = useToggle(false)

  return (
    <header className='header'>
      <Logo />
      <NavMenu className='nav__menu' onClick={toggleOpenMenu} />
      <Nav />
      <NavAside isOpenMenu={isOpenMenu} toggleOpenMenu={toggleOpenMenu} />
    </header>
  )
}

export default Header
