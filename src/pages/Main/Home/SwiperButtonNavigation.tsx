import { useState } from 'react'
import { useSwiper } from 'swiper/react'

function SwiperButtonNavigation() {
  const swiper = useSwiper()

  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const update = () => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  swiper.on('slideChange', update)
  swiper.on('reachBeginning', update)
  swiper.on('reachEnd', update)

  return (
    <>
      <div className="flex justify-center mt-5 gap-12">
        <button onClick={() => swiper.slidePrev()}>
          <svg
            className={` ${
              isBeginning
                ? 'text-gray-200 cursor-not-allowed'
                : 'text-gray-400 hover:text-black'
            } fill-current size-7 text-2xl`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </button>
        <button onClick={() => swiper.slideNext()}>
          <svg
            className={` ${
              isEnd
                ? 'text-gray-200 cursor-not-allowed'
                : 'text-gray-400 hover:text-black'
            } fill-current size-7 text-2xl`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </button>
      </div>
    </>
  )
}

export default SwiperButtonNavigation
