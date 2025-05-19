import { Outlet } from 'react-router'

function AdminLayout() {
  return (
    <>
      <h1>Layout Admin</h1>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default AdminLayout
