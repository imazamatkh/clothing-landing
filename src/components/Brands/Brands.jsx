import './Brands.css'
import { brands } from '../../constants/brands'

function Brands() {
  return (
    <section className={'brands section'}>
      <h2 className={'section__title'}>Brands We Sell</h2>
      <div className={'container'}>
        <div className={'brands__content'}>
          <div className={'brands__grid grid'}>
            {brands.map((brand) => (
              <img className={'brands__img'} src={brand.url} alt={brand.name} key={brand.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brands