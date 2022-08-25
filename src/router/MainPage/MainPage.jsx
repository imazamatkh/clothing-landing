import Home from '../../components/Home/Home'
import New from '../../components/New/New'
import Collection from '../../components/Collection/Collection'
import Products from '../../components/Products/Products'
import Brands from '../../components/Brands/Brands'

function MainPage() {
  return (
    <main className={'main'}>
      <Home />
      <New />
      <Collection />
      <Products />
      <Brands />
    </main>
  )
}

export default MainPage
