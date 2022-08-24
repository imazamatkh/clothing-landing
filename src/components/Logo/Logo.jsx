import { Link } from 'react-router-dom'

import './Logo.css'

function Logo(props) {
  return (
    <div className={`logo ${props.className}`}>
      <Link className={'logo__link'} to={'/'}>
        Shop.
      </Link>
    </div>
  )
}

export default Logo