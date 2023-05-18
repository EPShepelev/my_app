import { Route, Routes } from 'react-router-dom'
import { useEffect, useState, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { getDocs } from 'firebase/firestore'
import { setPosts } from './store/slices/posts'

import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Error from './pages/Error'
import AuthContext from './context'

import { colRef } from './firebase'

function App() {
  const dispatch = useDispatch()
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
  }, [])

  useEffect(() => {
    getDocs(colRef)
      .then((snapshot) => {
        const posts = []
        snapshot.docs.forEach((doc) => {
          posts.push({ ...doc.data() })
        })
        dispatch(setPosts(posts))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  const authProviderValue = useMemo(
    () => ({ isAuth, setIsAuth }),
    [isAuth, setIsAuth]
  )

  return (
    <AuthContext.Provider value={authProviderValue}>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  )
}

export default App
