import './ScrollUp.css'
import ArrowUpSvg from '../Icons/ArrowUpSvg'
import {useState} from "react";

function ScrollUp() {
  const [showScrollUp, setShowScrollUp] = useState(false)

  const scrollUp = () => {
    window.scrollY >= 350 ? setShowScrollUp(true) : setShowScrollUp(false)
  }

  window.addEventListener('scroll', scrollUp)

  return (
    <>
      <div className={`scroll-up ${showScrollUp ? 'show-scroll' : ''}`}>
        <button className={'scroll-up__btn'}>
          <ArrowUpSvg/>
        </button>
      </div>
    </>
  )
}

export default ScrollUp