import { NavLink } from '@/components'
import { NavRoutes } from '@/utils'

function NavFooter() {
  return (
    <nav className='nav__footer'>
      <ul className='nav__footer__list'>
        <li className='nav__footer__item'>Explore</li>
        {NavRoutes.map(({ name, path }) => (
          <li className='nav__footer__item' key={path}>
            <NavLink className='nav__footer__link' href={path}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavFooter
