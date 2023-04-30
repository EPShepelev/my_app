import { useSelector } from 'react-redux'

function useAuth() {
  const { id, name, email, token } = useSelector((state) => state.user)

  return {
    isAuth: !!id,
    id,
    name,
    email,
    token,
  }
}

export default useAuth
