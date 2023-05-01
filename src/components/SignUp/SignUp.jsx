import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import { setUser } from '../../store/slices/user'

import Form from '../Form/Form'

// import styles from './SignUp.module.css'

export default function SignUp() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRegistration = (email, password) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(() => alert('ошибка регистрации'))
  }
  return (
    <div>
      <Form handleClick={handleRegistration} btnText="Зарегистрироваться" />
    </div>
  )
}
