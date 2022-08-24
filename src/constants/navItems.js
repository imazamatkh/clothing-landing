import HomeSvg from '../components/Icons/HomeSvg'
import NewSvg from '../components/Icons/NewSvg'
import CollectionSvg from '../components/Icons/CollectionSvg'
import ProductsSvg from '../components/Icons/ProductsSvg'

export const navItems = [
  {
    id: 'home',
    linkName: 'Home',
    linkUrl: '/',
    linkIcon: <HomeSvg />
  },
  {
    id: 'new',
    linkName: 'New',
    linkUrl: '/new',
    linkIcon: <NewSvg />
  },
  {
    id: 'collection',
    linkName: 'Collection',
    linkUrl: '/collection',
    linkIcon: <CollectionSvg />
  },
  {
    id: 'products',
    linkName: 'Products',
    linkUrl: '/products',
    linkIcon: <ProductsSvg />
  }
]
