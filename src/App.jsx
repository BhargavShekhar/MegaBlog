import { useEffect, useState } from 'react'
import './App.css'
import authService from './appwrite/auth'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // authservice -> gets appwrite methods
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          // dispatch in store to update reducer
          dispatch(login({ userData }))
        }
        else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false)) 
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          TODO <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null

  // return (
  //   <>
  //     <h1>Working on a mega project</h1>
  //   </>
  // )
}

export default App
