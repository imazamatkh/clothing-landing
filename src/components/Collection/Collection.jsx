import './Collection.css'
import ArrowRightSvg from '../Icons/ArrowRightSvg'
import CollectionImage1 from '../../assets/img/collection1.png'
import CollectionImage2 from '../../assets/img/collection2.png'

const collections = [
  {
    id: 'collection-1',
    title: `Men Collection`,
    btn: 'Explore Clothes',
    img: CollectionImage1
  },
  {
    id: 'collection-2',
    title: `Women Collection`,
    btn: 'Explore Clothes',
    img: CollectionImage2
  }
]

function Collection() {
  return (
    <section className={'collection section'}>
      <div className={'container'}>
        <div className={'collection__content'}>
          {collections.map(collection => (
            <div className={'collection__explore'} key={collection.id}>
              <div className={'collection__data'}>
                <h2 className={'collection__title'}>{collection.title}</h2>
                <a className={'button__link'} href="">
                  {collection.btn}
                  <ArrowRightSvg />
                </a>
              </div>

              <img className={'collection__img'} src={collection.img} alt={collection.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collection