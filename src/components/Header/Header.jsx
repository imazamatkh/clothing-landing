import { useState } from 'react'

import './Header.css'

import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import ThemeButton from '../ThemeButton/ThemeButton'

function Header({ theme, toggleTheme }) {
  const [scrollHeader, setScrollHeader] = useState(false)

  const changeBackgroundHeader = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 50) {
      setScrollHeader(true)
    } else {
      setScrollHeader(false)
    }
  }
  window.addEventListener('scroll', changeBackgroundHeader)

  return (
    <header className={`header${scrollHeader ? ' scroll-header' : ''}`}>
      <div className={'container'}>
        <div className={'header__content'}>
          <Logo />
          <Navigation />
          <ThemeButton theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  )
}

export default Header
