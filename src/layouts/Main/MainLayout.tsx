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
        <footer className="bg-blue-400 h-[597.6px]">Footer</footer>
      </div>
    </>
  )
}

export default MainLayout
