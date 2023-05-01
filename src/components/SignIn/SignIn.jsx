import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { setUser } from '../../store/slices/user'

import Form from '../Form/Form'

// import styles from './SignIn.module.css'

export default function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (email, password) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        )
        navigate('/')
      })
      .catch(() => alert('ошибка авторизации'))
  }
  return (
    <div>
      {/* TODO: переделать в нечто типа модального окна */}
      <Form handleClick={handleLogin} btnText="Войти" />
    </div>
  )
}
