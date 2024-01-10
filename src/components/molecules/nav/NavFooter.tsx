import { NavLink } from '@/components'
import { Routes } from '@/utils'

function NavFooter() {
  return (
    <nav className='nav__footer'>
      <ul className='nav__footer__list'>
        <li className='nav__footer__item'>Explore</li>
        <li className='nav__footer__item'>
          <NavLink className='nav__footer__link' href={Routes.ConnectWallet}>
            Marketplace
          </NavLink>
        </li>
        <li className='nav__footer__item'>
          <NavLink className='nav__footer__link' href={Routes.ConnectWallet}>
            Rankings
          </NavLink>
        </li>
        <li className='nav__footer__item'>
          <NavLink className='nav__footer__link' href={Routes.ConnectWallet}>
            Connect a wallet
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavFooter
