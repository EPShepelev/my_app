import { Link } from 'react-router-dom'

import SignIn from '../components/SignIn/SignIn'

export default function Login() {
  return (
    <div className="authBox">
      <SignIn />
      <div>
        Нет учетной записи? Зарегистрируйтесь:&nbsp;
        <Link to="/registration">Регистрация</Link>
      </div>
    </div>
  )
}
