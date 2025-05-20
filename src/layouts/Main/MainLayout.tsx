import MainFooter from '@/layouts/Main/MainFooter'
import MainHeader from '@/layouts/Main/MainHeader'
import { Outlet } from 'react-router'

function MainLayout() {
  return (
    <>
      <div className="bg-white">
        <MainHeader />
        <main>
          <Outlet />
        </main>
        <MainFooter />
      </div>
    </>
  )
}

export default MainLayout
