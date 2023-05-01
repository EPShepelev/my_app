import { Link } from 'react-router-dom'

import SignUp from '../components/SignUp/SignUp'

export default function Registration() {
  return (
    <div className="authBox">
      <h2 className="authTitle">Регистрация</h2>
      <SignUp />
      <p>Уже есть аккаунт?</p>
      <Link to="/login">Войти</Link>
    </div>
  )
}
