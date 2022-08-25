import Collection from '../../components/Collection/Collection'
import Products from '../../components/Products/Products'
import Brands from '../../components/Brands/Brands'
import New from '../../components/New/New'

function CollectionPage() {
  return (
    <>
      <Collection />
      <New />
      <Products />
      <Brands />
    </>
  )
}

export default CollectionPage