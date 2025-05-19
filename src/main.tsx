import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import DashboardPage from './pages/Admin/DashboardPage.tsx'
import HomePage from './pages/Main/HomePage.tsx'
import AdminLayout from './layouts/Admin/AdminLayout.tsx'
import MainLayout from '@/layouts/Main/MainLayout.tsx'

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
