import { Link } from 'react-router-dom'

import './Footer.css'

import Logo from '../Logo/Logo'
import FacebookSvg from '../Icons/FacebookSvg'
import InstagramSvg from '../Icons/InstagramSvg'
import WhatsappSvg from '../Icons/WhatsappSvg'

function Footer() {
  return (
    <footer className={'footer section'}>
      <div className={'container'}>
        <div className={'footer__content'}>
          <div className={'footer__grid grid'}>
            <div>
              <Logo className={'footer__logo'} />
              <div className={'footer__description'}>
                <p>
                  Committed to bringing you the <br /> best clothing from
                  popular <br /> brands.
                </p>
              </div>
            </div>
            <div className={'footer__navigations'}>
              <div>
                <h3 className={'footer__title'}>Company</h3>
                <ul className={'footer__list'}>
                  <li className={'footer__item'}>
                    <Link className={'footer__link'} to={''}>Shop</Link>
                  </li>
                  <li className={'footer__item'}>
                    <Link className={'footer__link'} to={''}>Category</Link>
                  </li>
                  <li className={'footer__item'}>
                    <Link className={'footer__link'} to={''}>Contact info</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={'footer__title'}>Blog</h3>
                <ul className={'footer__list'}>
                  <li className={'footer__item'}>
                    <Link className={'footer__link'} to={''}>Events</Link>
                  </li>
                  <li className={'footer__item'}>
                    <Link className={'footer__link'} to={''}>Popular news</Link>
                  </li>
                  <li className={'footer__item'}>
                    <Link className={'footer__link'} to={''}>Recent news</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={'footer__title'}>Office</h3>
                <div className={'footer__information'}>
                  Monday - Saturday <br /> 9AM - 10PM
                </div>
              </div>

              <div>
                <h3 className={'footer__title'}>Contact us</h3>
                <ul className={'socials'}>
                  <li className={'socials__item'}>
                    <a
                      className={'socials__link'}
                      href="https://www.facebook.com/"
                      target={'_blank'}
                    >
                      <FacebookSvg />
                    </a>
                  </li>
                  <li className={'socials__item'}>
                    <a
                      className={'socials__link'}
                      href="https://www.instagram.com/"
                      target={'_blank'}
                    >
                      <InstagramSvg />
                    </a>
                  </li>
                  <li className={'socials__item'}>
                    <a
                      className={'socials__link'}
                      href="https://api.whatsapp.com/send?phone=998950044048&text=Hello"
                      target={'_blank'}
                    >
                      <WhatsappSvg />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={'container'}>
        <div className={'footer__info'}>
          <span className={'footer__copy'}>&#169; Bedimcode. All rigths reserved</span>
          <a className={'footer__privacy'} href="" target={'_blank'}>Terms & Conditions</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
