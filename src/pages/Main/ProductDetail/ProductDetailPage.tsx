import { useParams } from 'react-router'

function ProductDetailPage() {
  const { productId } = useParams()

  return (
    <>
      <h1>Trang Chi tiết sản phẩm {productId}</h1>
    </>
  )
}

export default ProductDetailPage
