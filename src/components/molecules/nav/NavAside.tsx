import { ButtonLink, CloseIcon, NavLink, UserIcon } from '@/components'
import { NavRoutes, Routes } from '@/utils'
import clsx from 'clsx'

interface Props {
  isOpenMenu: boolean
  toggleOpenMenu: React.MouseEventHandler<HTMLElement>
}

function NavAside({ isOpenMenu, toggleOpenMenu }: Props) {
  return (
    <nav className={clsx('nav__aside', isOpenMenu && 'nav__aside--open')}>
      <ul className='nav__aside__list'>
        {NavRoutes.map(({ name, path }) => (
          <li className='nav__aside__item' key={path}>
            <NavLink className='nav__aside__link' href={path} onClick={toggleOpenMenu}>
              {name}
            </NavLink>
          </li>
        ))}
        <li className='nav__aside__item'>
          <ButtonLink href={Routes.CreateAccount} onClick={toggleOpenMenu}>
            <UserIcon />
            Sign Up
          </ButtonLink>
        </li>
        <li>
          <button className='nav__aside__close' onClick={toggleOpenMenu}>
            <CloseIcon />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default NavAside
