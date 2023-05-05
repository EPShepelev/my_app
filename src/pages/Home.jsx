import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import useAuth from '../hooks/useAuth'
import { removeUser } from '../store/slices/user'
import Button from '../components/Button/Button'

export default function Home() {
  const dispatch = useDispatch()
  const { email, isAuth } = useAuth()

  const logoutHandler = () => {
    dispatch(removeUser())
  }

  return isAuth ? (
    <div>
      <h1>Welcome to home page</h1>
      <p>user: {email}</p>
      <Button onClickHandler={logoutHandler} text="выход" />
    </div>
  ) : (
    <Navigate to="/login" />
  )
}
