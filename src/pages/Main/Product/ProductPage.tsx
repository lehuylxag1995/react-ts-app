import { useParams } from 'react-router'

function ProductPage() {
  const { categoryId } = useParams()
  return (
    <>
      {categoryId ?? ''}
      <h1>Trang Danh sách sản phẩm</h1>
    </>
  )
}

export default ProductPage
