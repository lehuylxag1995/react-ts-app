function MainFooter() {
  return (
    <>
      <footer className="bg-white size-auto border-gray-100 border-t-1 ">
        <div className="flex flex-col py-10 px-5 gap-y-10 md:flex-row  md:px-40 md:py-20 md:gap-x-5 ">
          {/* Cột 1 */}
          <div className="md:basis-6/10">
            <div className="capitalize text-xl pb-6">navigations</div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <ul className="text-gray-500 space-y-3 ">
                <li>Sell online</li>
                <li>Features</li>
                <li>Shopping cart</li>
                <li>Store builder</li>
              </ul>
              <ul className="text-gray-500 space-y-3 ">
                <li>Mobile commerce</li>
                <li>Dropshipping</li>
                <li>Website development</li>
              </ul>
              <ul className="text-gray-500 space-y-3 ">
                <li>Point of sale</li>
                <li>Hardware</li>
                <li>Software</li>
              </ul>
            </div>
          </div>
          {/* Cột 2 */}
          <div className="flex flex-col md:basis-3/10">
            <div className="capitalize text-xl pb-5">Promo</div>
            <img
              className="h-auto w-full object-cover rounded-sm"
              src="/images/hero_1.jpg"
              alt=""
            />
            <p className="text-[#7971ea] pt-6">Finding Your Perfect Shoes</p>
            <p className="text-gray-400">Promo from nuary 15 — 25, 2019</p>
          </div>
          {/* Cột 3 */}
          <div className="flex flex-col gap-15 md:basis-3/10">
            <div>
              <div className="capitalize text-xl pb-5">Contact Info</div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <svg
                    className="fill-current text-[#7971ea] size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                  </svg>
                  <p>
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <svg
                    className="fill-current text-[#7971ea] size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                  <p className="text-gray-400">+2 392 3929 210</p>
                </div>
                <div className="flex items-center gap-4">
                  <svg
                    className="fill-current text-[#7971ea] size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                  <p>emailaddress@domain.com</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 ">
              <div className="text-[20px]">Subscribe</div>
              <form className="relative">
                <input
                  className=" w-full rounded-md py-4 px-3 border border-gray-400 focus:border-[#7971ea] outline-none"
                  type="text "
                  placeholder="Email"
                />
                <button className="absolute transition duration-300 ease-in-out right-1 top-[50%] -translate-y-[50%] hover:shadow-xl/30 hover:bg-indigo-600 cursor-pointer bg-[#7971ea] text-white text-md uppercase tracking-[2px] font-light px-6 py-3 rounded-md">
                  send
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="text-center py-10 px-10 md:py-20">
          <p className="text-gray-400">
            Copyright ©2025 All rights reserved | This template is made with by
            <span className="text-[#7971ea]"> Lê Huy</span>
          </p>
        </div>
      </footer>
    </>
  )
}

export default MainFooter
