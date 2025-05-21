import AdminLayout from '@/layouts/Admin/AdminLayout'
import MainLayout from '@/layouts/Main/MainLayout'
import DashboardPage from '@/pages/Admin/DashboardPage'
import CartPage from '@/pages/Main/Cart/CartPage'

import HomePage from '@/pages/Main/Home/HomePage'
import ProductPage from '@/pages/Main/Product/ProductPage'
import ProductDetailPage from '@/pages/Main/ProductDetail/ProductDetailPage'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  //Main Layout
  {
    path: '/',
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'trang-chu', Component: HomePage },
      { path: 'gio-hang', Component: CartPage },
      { path: 'danh-sach-san-pham', Component: ProductPage },
      { path: 'chi-tiet-san-pham/:productId', Component: ProductDetailPage },
      { path: 'danh-muc/:categoryId', Component: ProductPage }
    ]
  },
  //Admin Layout
  {
    path: '/admin',
    Component: AdminLayout,
    children: [{ index: true, Component: DashboardPage }]
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
