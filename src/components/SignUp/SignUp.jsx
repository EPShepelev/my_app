import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import { setUser } from '../../store/slices/user'

import Form from '../Form/Form'

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
      .catch((e) => navigate('/error', { state: e.message }))
  }
  //  {/* TODO: переделать в нечто типа модального окна */}
  return <Form handleClick={handleRegistration} btnText="Регистрация" />
}
