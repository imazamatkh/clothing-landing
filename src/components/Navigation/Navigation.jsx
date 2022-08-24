import { Link } from 'react-router-dom'

import './Navigation.css'

import { navItems } from '../../constants/navItems'

function Navigation() {
  return (
    <nav className={'nav'} id={'nav'}>
      <ul className={'nav__list'}>
        <div className={'nav__items'}>
          {navItems.map((navItem) => (
            <li className={'nav__item'} key={navItem.id}>
              <Link className={'nav__link'} to={navItem.linkUrl}>
                {navItem.linkIcon}
                <span className={'nav__link-txt'}>{navItem.linkName}</span>
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  )
}

export default Navigation