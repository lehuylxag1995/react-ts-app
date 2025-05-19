import AdminLayout from '@/layouts/Admin/AdminLayout'
import MainLayout from '@/layouts/Main/MainLayout'
import DashboardPage from '@/pages/Admin/DashboardPage'
import HomePage from '@/pages/Main/Home/HomePage'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  //Main Layout
  {
    path: '/',
    Component: MainLayout,
    children: [{ index: true, Component: HomePage }]
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
