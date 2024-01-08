import { ButtonLink, NavLink, UserIcon } from '@/components'
import { NavRoutes, Routes } from '@/utils'

function Nav() {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        {NavRoutes.map(({ name, path }) => (
          <li className='nav__item' key={path}>
            <NavLink className='nav__link' href={path}>
              {name}
            </NavLink>
          </li>
        ))}
        <li className='nav__item'>
          <ButtonLink href={Routes.CreateAccount}>
            <UserIcon /> Sign Up
          </ButtonLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
