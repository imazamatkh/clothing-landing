import './Products.css'

// Import Swiper React components
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import { products } from '../../constants/products'
import ArrowRightSvg from "../Icons/ArrowRightSvg";
import ArrowLeftSvg from "../Icons/ArrowLeftSvg";

function Products() {
  return (
    <section className={'products section'}>
      <h2 className={'section__title'}>Best Products</h2>
      <div className={'container'}>
        <div className={'products__content'}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={32}
            slidesPerView={'auto'}
            navigation={{
              prevEl: '.prev',
              nextEl: '.next'
            }}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              340: {
                width: 270,
                slidesPerView: 1
              },
              1024: {
                spaceBetween: 72
              }
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <article className={'products__card'}>
                  <img
                    className={'products__img'}
                    src={product.img}
                    alt={product.title}
                  />
                  <h2 className={'products__title'}>{product.title}</h2>
                  <span className={'products__price'}>${product.price}</span>
                </article>
              </SwiperSlide>
            ))}
            <div className={'prev'}>
              <ArrowLeftSvg />
            </div>
            <div className={'next'}>
              <ArrowRightSvg />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Products
