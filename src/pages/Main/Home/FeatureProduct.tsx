// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import { Navigation } from 'swiper/modules'
import SwiperButtonNavigation from '@/pages/Main/Home/SwiperButtonNavigation'
import SwiperItem from '@/pages/Main/Home/SwiperItem'

function FeatureProduct() {
  return (
    <>
      <div className="bg-[#f8f9fa] size-auto text-center ">
        <span className="flex justify-center items-center pt-10">
          <svg
            className={`fill-current w-8 text-[#7971ea] `}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z" />
          </svg>
        </span>

        <h2 className="text-[30px] font-medium pt-5">Featured Products</h2>
        <div className="p-10 md:px-45">
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              430: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}
          >
            <SwiperSlide>
              <SwiperItem />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperItem />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperItem />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperItem />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperItem />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperItem />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperItem />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperItem />
            </SwiperSlide>
            <SwiperButtonNavigation />
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default FeatureProduct
