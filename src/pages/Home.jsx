import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import useAuth from '../hooks/useAuth'
import { removeUser } from '../store/slices/user'

export default function Home() {
  const dispatch = useDispatch()
  const { email, isAuth } = useAuth()

  return isAuth ? (
    <div>
      <h1>Welcome to home page</h1>
      <p>user: {email}</p>
      <button type="button" onClick={() => dispatch(removeUser())}>
        Выйти
      </button>
    </div>
  ) : (
    <Navigate to="/login" />
  )
}
