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
      <div className="bg-[#f8f9fa] size-auto text-center py-30">
        <h2 className="text-[30px] font-medium mb-15">Featured Products</h2>
        <div className="px-40">
          <Swiper modules={[Navigation]} slidesPerView={3} spaceBetween={30}>
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
