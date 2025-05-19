function SwiperItem() {
  return (
    <div className="bg-white shadow-xl">
      <img
        src="/images/cloth_1.jpg"
        alt="cloth_1"
        className="mb-4 size-auto object-cover"
      />
      <h3 className="text-lg font-medium text-[#7971ea]">Tank Top</h3>
      <p className="text-gray-500">Finding perfect t-shirt</p>
      <p className="text-[#7971ea] font-bold mt-2 pb-10">$50</p>
    </div>
  )
}

export default SwiperItem
