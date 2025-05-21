import { useState } from 'react'

export default function MainHeader() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  function toggleOpenMenu() {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <header>
      {/* Reponsive PC  */}
      <div className="hidden md:block">
        {/* Header Top  */}
        <div className="size-auto border-b-1 border-gray-200 px-10">
          <div className="flex md:flex-row items-center size-auto max-w-[1140px] md:mx-auto md:pt-[40px] md:pb-[40px]">
            {/* Tìm kiếm  */}
            <div className="basis-1/3 h-[43px]">
              <form
                action=""
                className="flex justify-start items-center h-full gap-x-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400 fill-current"
                  viewBox="0 0 512 512"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
                <div className="flex justify-end size-full">
                  <input
                    className="placeholder-gray-400 transition-all duration-700 ease-in-out w-[95%] focus:w-[100%] focus:outline-none focus:text-gray-700"
                    type="text"
                    placeholder="Tìm kiếm"
                  />
                </div>
              </form>
            </div>
            {/* Logo  */}
            <div className="basis-1/3 h-[43px]">
              <div className="flex justify-center items-center h-full">
                <span className="inline-block uppercase border-2 px-[10px] text-[20px] text-[#25262a] tracking-[4px] font-[350]">
                  shoppers
                </span>
              </div>
            </div>
            {/* Icon điều hướng  */}
            <div className="basis-1/3 h-[43px]">
              <ul className="flex justify-end items-center h-full gap-4">
                <li>
                  <svg
                    className="size-4 text-gray-400 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                  </svg>
                </li>
                <li>
                  <svg
                    className="size-4 text-gray-400 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                  </svg>
                </li>
                <li className="relative group">
                  <svg
                    className="fill-current text-gray-400 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                  <span className="bg-[#7971ea] text-white text-xs font-normal flex items-center justify-center rounded-full size-[24px] absolute -top-6 -right-5 transition-all duration-300 ease-in-out group-hover:-translate-y-1">
                    2
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Navigation  */}
        <nav className="size-auto">
          <ul className="flex gap-10 size-auto items-center justify-center text-gray-600 uppercase text-[16px] font-light">
            <li className="relative group/menu">
              <a className="flex items-center justify-center" href="#">
                <span className="py-5 pr-2 group-hover/menu:text-[#7971ea]">
                  Home
                </span>
                <svg
                  className="size-3 fill-current font-light text-gray-400 group-hover/menu:text-[#7971ea]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </a>
              <ul className="z-50 transition-all duration-200 ease-in-out translate-y-8 opacity-0 invisible group-hover/menu:visible group-hover/menu:opacity-100 group-hover/menu:translate-y-0 absolute h-auto w-[200px] bg-white shadow-lg border-t-2 border-[#7971ea] font-light">
                <li className="w-full h-[45.2px] px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-black">
                  Menu One
                </li>
                <li className="w-full h-[45.2px] px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-black">
                  Menu Two
                </li>
                <li className="w-full h-[45.2px] px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-black">
                  Menu Two
                </li>
                <li className="relative group/subitem h-[45.2px] w-full px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-black">
                  <a
                    className="flex items-center justify-between w-full"
                    href="#"
                  >
                    <span>Menu three</span>
                    <svg
                      className="size-3 fill-current text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </a>
                  <ul className="bg-white absolute -right-50 -bottom-23 h-auto w-[200px] border-t-2 border-[#7971ea] shadow-2xl invisible opacity-0 translate-y-14 group-hover/subitem:translate-y-0 group-hover/subitem:opacity-100 group-hover/subitem:visible transition-all duration-300 ease-in-out">
                    <li className="w-full h-[45.2px] py-2 px-4 text-gray-500 hover:text-black hover:bg-gray-100">
                      Sub menu 1
                    </li>
                    <li className="w-full h-[45.2px] py-2 px-4 text-gray-500 hover:text-black hover:bg-gray-100">
                      Sub menu 2
                    </li>
                    <li className="w-full h-[45.2px] py-2 px-4 text-gray-500 hover:text-black hover:bg-gray-100">
                      Sub menu 3
                    </li>
                  </ul>
                </li>
                <li className="w-full h-[45.2px] px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-black">
                  Menu Two
                </li>
                <li className="w-full h-[45.2px] px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-black">
                  Menu Two
                </li>
                <li className="relative group/subitem h-[45.2px] w-full px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-black">
                  <a
                    className="flex items-center justify-between w-full"
                    href="#"
                  >
                    <span>Menu three</span>
                    <svg
                      className="size-3 fill-current text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </a>
                  <ul className="bg-white absolute -right-50 -bottom-23 h-auto w-[200px] border-t-2 border-[#7971ea] shadow-2xl invisible opacity-0 translate-y-14 group-hover/subitem:translate-y-0 group-hover/subitem:opacity-100 group-hover/subitem:visible transition-all duration-300 ease-in-out">
                    <li className="w-full h-[45.2px] py-2 px-4 text-gray-500 hover:text-black hover:bg-gray-100">
                      Sub menu 1
                    </li>
                    <li className="w-full h-[45.2px] py-2 px-4 text-gray-500 hover:text-black hover:bg-gray-100">
                      Sub menu 2
                    </li>
                    <li className="w-full h-[45.2px] py-2 px-4 text-gray-500 hover:text-black hover:bg-gray-100">
                      Sub menu 3
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="relative group/menu">
              <a
                className="flex items-center group-hover/menu:text-[#7971ea]"
                href="#"
              >
                <span className="py-5 pr-2">About</span>
                <svg
                  className="size-3 fill-current font-light text-gray-400 group-hover/menu:text-[#7971ea]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </a>
              <ul className="z-50 bg-white font-light shadow-lg transition-all duration-300 ease-in-out translate-y-8 opacity-0 invisible group-hover/menu:translate-y-0 group-hover/menu:opacity-100 group-hover/menu:visible border-t-2 border-[#7971ea] absolute h-auto w-[200px]">
                <li className="h-[45.2px] w-full px-4 py-2 text-gray-500 hover:text-black hover:bg-gray-100">
                  Menu 1
                </li>
                <li className="h-[45.2px] w-full px-4 py-2 text-gray-500 hover:text-black hover:bg-gray-100">
                  Menu 2
                </li>
                <li className="h-[45.2px] w-full px-4 py-2 text-gray-500 hover:text-black hover:bg-gray-100">
                  Menu 3
                </li>
              </ul>
            </li>
            <li>Shop</li>
            <li>Category</li>
            <li>New Arrivals</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>

      {/* Reponsive Mobile  */}
      <div className="block md:hidden">
        {/* Header top */}
        <div className="flex justify-center py-3">
          <span className="px-4 py-1 border-2 text-black border-black uppercase text-[17px] tracking-[4px] font-[400]">
            shoppers
          </span>
        </div>

        {/* Navigation  */}
        <div className="flex px-5 py-3 mb-6">
          {/* Tìm kiếm  */}
          <div className="w-1/2">
            <form
              action=""
              className="flex justify-start items-center h-full gap-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 text-gray-400 fill-current"
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
              <div className="flex justify-end size-full">
                <input
                  className="placeholder-gray-400 transition-all duration-700 ease-in-out w-[95%] focus:w-[100%] focus:outline-none focus:text-gray-700"
                  type="text"
                  placeholder="Tìm kiếm"
                />
              </div>
            </form>
          </div>

          {/* Icon điều hướng  */}
          <div className="w-1/2">
            <ul className="flex justify-end items-center h-full gap-4">
              <li>
                <svg
                  className="text-gray-400 fill-current size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                </svg>
              </li>
              <li>
                <svg
                  className="text-gray-400 fill-current size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
              </li>
              <li className="relative group">
                <svg
                  className="fill-current text-gray-400 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
                <span className="bg-[#7971ea] text-white text-xs font-normal flex items-center justify-center rounded-full size-[24px] absolute -top-6 -right-5 transition-all duration-300 ease-in-out group-hover:-translate-y-1">
                  2
                </span>
              </li>
              <li className="pl-4">
                <button className="block" onClick={toggleOpenMenu}>
                  <svg
                    className="fill-current text-gray-400 size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                  </svg>
                </button>
              </li>
            </ul>
          </div>

          {/* Overlay mờ  */}
          <div
            className={`${
              isOpenMenu
                ? 'opacity-70 pointer-events-auto'
                : 'opacity-0 pointer-events-none'
            } fixed top-0 left-0 size-full z-40 bg-black transition-opacity duration-500`}
            onClick={toggleOpenMenu}
          ></div>

          {/* Menu điều hướng   */}
          <div
            className={`${
              isOpenMenu ? 'translate-x-0' : 'translate-x-full'
            } bg-white fixed h-full w-3/4 top-0 right-0 z-50 transition-all duration-500 ease-in-out`}
          >
            {/* Logo */}
            <div className="flex flex-col">
              <div className="py-5 pl-10">
                <span className="inline-block uppercase border-2 px-[10px] text-[20px] text-[#25262a] tracking-[4px] font-[350]">
                  shoppers
                </span>
              </div>
              {/* Menu */}
              <ul className="overflow-y-auto h-screen flex flex-col gap-10 p-10 text-black">
                <li className="flex justify-between items-center group/menu">
                  <span className="group-active/menu:text-[#7971ea]">Home</span>
                  <svg
                    className="group-active/menu:text-[#7971ea] fill-current text-gray-400 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                  </svg>
                </li>
                <li className="">About</li>
                <li className="">Shop</li>
                <li className="">Category</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
