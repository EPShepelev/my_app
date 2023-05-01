import { useSelector } from 'react-redux'

function useAuth() {
  const { email, id, token } = useSelector((state) => state.user)

  return {
    email,
    id,
    token,
    isAuth: !!id,
  }
}

export default useAuth
