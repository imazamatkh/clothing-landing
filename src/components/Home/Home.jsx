import './Home.css'
import { Link } from 'react-router-dom'
import ArrowRightSvg from '../Icons/ArrowRightSvg'
import { homeImages } from '../../constants/homeImages'

function Home() {
  return (
    <section className={'home section'}>
      <div className={'container'}>
        <div className={'home__content'}>
          <div className={'home__grid grid'}>
            <div className={'home__data'}>
              <h1 className={'home__title'}>
                New Clothing <br /> Collection
              </h1>
              <p className={'home__description'}>
                The new collection of clothing from <br /> the best brands this
                year.
              </p>
              <Link className={'button__link'} to={'/new'}>
                Explore
                <ArrowRightSvg />
              </Link>
            </div>

            <div className={'home__images'}>
              {homeImages.map((homeImage) => (
                <img src={homeImage.ImageUrl} alt={homeImage.ImageAlt} key={homeImage.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
