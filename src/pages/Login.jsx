import { Link } from 'react-router-dom'

import SignIn from '../components/SignIn/SignIn'

export default function Login() {
  return (
    <div className="authBox">
      <h2 className="authTitle">Войти</h2>
      <SignIn />
      <p>
        Если у вас нет учетной записи, перейдите по ссылке и зарегистрируйтесь:
      </p>
      <Link to="/registration">Регистрация</Link>
    </div>
  )
}
