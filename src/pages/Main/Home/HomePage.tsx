import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import FeatureProduct from '@/pages/Main/Home/FeatureProduct'

function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // thời gian animation (ms)
      once: true // chỉ animate 1 lần
    })
  }, [])

  return (
    <>
      {/* Banner */}
      <div className="bg-[url(/images/hero_1.jpg)] bg-cover bg-center h-[600px] w-full">
        <div className="relative flex items-center md:justify-end size-full md:pr-40">
          <div className="absolute top-5 flex flex-col gap-3 text-center md:text-left md:max-w-[480px]">
            <span className="text-black font-[80px] text-[30px] md:font-bold md:text-[45px] md:text-balance md:tracking-[2px]">
              Finding Your Perfect Shoes
            </span>
            <span className="text-black tracking-normal text-[20px] font-light leading-8 md:leading-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at iaculis quam. Integer accumsan tincidunt fringilla.
            </span>
            <div>
              <a
                className="bg-[#7971ea] px-6 py-2 rounded text-white uppercase font-light tracking-[2px] text-center"
                href="#"
              >
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Three Item */}
      <div
        data-aos="fade-up"
        className="px-5 py-5 h-auto w-full border-b-1 border-gray-200 md:h-[240px]"
      >
        <div className="flex flex-col md:flex-row size-full px-5 md:px-45 gap-5">
          <div className="flex items-center justify-center h-auto md:h-full w-full md:w-1/3">
            <svg
              className="pr-4 pb-15 size-[150px] fill-current text-[#7971ea]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M48 0C21.5 0 0 21.5 0 48L0 368c0 26.5 21.5 48 48 48l16 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L48 0zM416 160l50.7 0L544 237.3l0 18.7-128 0 0-96zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
            <div className="flex flex-col gap-2">
              <h1 className="text-black uppercase font-[25px] tracking-[1px]">
                Free Shipping
              </h1>
              <p className="text-balance text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center h-auto md:h-full w-full md:w-1/3">
            <svg
              className="pr-4 pb-15 size-[150px] text-[#7971ea] fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M463.5 224l8.5 0c13.3 0 24-10.7 24-24l0-128c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l119.5 0z" />
            </svg>

            <div className="flex flex-col gap-2">
              <h1 className="text-black uppercase font-[25px] tracking-[1px]">
                Free Shipping
              </h1>
              <p className="text-balance text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center h-auto md:h-full w-full md:w-1/3">
            <svg
              className="pr-4 pb-15 size-[150px] text-[#7971ea] fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
            </svg>
            <div className="flex flex-col gap-2">
              <h1 className="text-black uppercase font-[25px] tracking-[1px]">
                Free Shipping
              </h1>
              <p className="text-balance text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* three Category  */}
      <div
        data-aos="fade-up"
        className="size-auto mx-5 my-10 md:px-40 md:py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative group overflow-hidden">
            <img
              src="images/women.jpg"
              alt="women"
              className="size-auto transition-transform duration-300 ease-in-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-[13px] uppercase tracking-normal font-bold">
                Collections
              </p>
              <h2 className="text-[40px] font-[450]">Women</h2>
            </div>
          </div>

          <div className="relative group overflow-hidden">
            <img
              src="images/children.jpg"
              alt="women"
              className="size-auto transition-transform duration-300 ease-in-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-[13px] uppercase tracking-normal font-bold">
                Collections
              </p>
              <h2 className="text-[40px] font-[450]">Women</h2>
            </div>
          </div>

          <div className="relative group overflow-hidden">
            <img
              src="images/men.jpg"
              alt="women"
              className="size-auto transition-transform duration-300 ease-in-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-[13px] uppercase tracking-normal font-bold">
                Collections
              </p>
              <h2 className="text-[40px] font-[450]">Women</h2>
            </div>
          </div>
        </div>
      </div>

      <FeatureProduct />

      {/* Big Sale */}
      <div>
        <span className="flex justify-center items-center pt-15">
          <svg
            className={`fill-current w-8 text-[#7971ea] `}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z" />
          </svg>
        </span>
        <h3 className="text-center font-[450] text-3xl capitalize pt-4">
          big sale !
        </h3>
        <div className="flex flex-col px-10 pt-15 pb-10 md:flex-row md:px-44 md:pb-30">
          <img
            className="w-full max-w-[600px] h-auto object-cover"
            src="/images/blog_1.jpg"
            alt="big sale"
          />
          <div className="flex flex-col text-center justify-center gap-5 px-10">
            <span className="text-[#7971ea] text-[25px] font-[500] tracking-[1px]">
              50% less in all items
            </span>
            <span className="text-gray-400">
              By <span className="text-[#7971ea]">Carl Smith</span> • September
              3, 2018
            </span>
            <span className="text-gray-400 text-balance">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              iste dolor accusantium facere corporis ipsum animi deleniti
              fugiat. Ex, veniam?
            </span>
            <div>
              <button className="bg-[#7971ea] text-white px-8 py-2 uppercase rounded-md tracking-wider hover:bg-indigo-600 hover:shadow-xl/20  hover:-translate-y-1 transition duration-300 ease-in-out">
                shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
