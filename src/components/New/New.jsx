import './New.css'
import { Link } from 'react-router-dom'
import ArrowRightSvg from '../Icons/ArrowRightSvg'
import { newCards } from '../../constants/newCards'

function New() {
  return (
    <section className={'new section'}>
      <h2 className={'section__title'}>New Categories</h2>
      <div className={'container'}>
        <div className={'new__content'}>
          <div className={'new__grid grid'}>
            {newCards.map((newCard) => (
              <article className={'new__card'} key={newCard.id}>
                <img className={'new__img'} src={newCard.cardImage} alt={newCard.cardTitle} />
                <Link className={'new__link'} to={newCard.cardUrl}>
                  <div className={'new__data'}>
                    <h2 className={'new__title'}>{newCard.cardTitle}</h2>
                    <span className={'new__subtitle'}>
                      {newCard.cardSubtitle}
                    </span>
                  </div>
                  <ArrowRightSvg />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default New
