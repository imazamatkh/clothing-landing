import './ThemeButton.css'

import MoonSvg from '../Icons/MoonSvg'
import SunSvg from '../Icons/SunSvg'

function ThemeButton({ theme, toggleTheme }) {
  console.log(theme)
  return (
    <button className={'theme-button'} type={'button'} onClick={toggleTheme}>
      {theme ? <MoonSvg /> : <SunSvg />}
    </button>
  )
}

export default ThemeButton
