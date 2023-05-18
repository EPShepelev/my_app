import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { setUser } from '../../store/slices/user'

import Form from '../Form/Form'

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
        localStorage.setItem('auth', 'true')
        navigate('/')
      })
      .catch((e) => navigate('/error', { state: e.message }))
  }
  //  {/* TODO: переделать в нечто типа модального окна */}
  return <Form handleClick={handleLogin} btnText="Войти" />
}
