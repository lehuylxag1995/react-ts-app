import { Outlet } from 'react-router'
import MainHeader from './MainHeader'

function MainLayout() {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
