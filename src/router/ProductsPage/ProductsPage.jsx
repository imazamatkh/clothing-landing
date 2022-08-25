import Products from '../../components/Products/Products'
import Collection from '../../components/Collection/Collection'
import Brands from '../../components/Brands/Brands'
import New from '../../components/New/New'

function ProductsPage() {
  return (
    <>
      <Products />
      <New />
      <Collection />
      <Brands />
    </>
  )
}

export default ProductsPage