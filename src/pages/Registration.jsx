import { Link } from 'react-router-dom'

import SignUp from '../components/SignUp/SignUp'

export default function Registration() {
  return (
    <div className="authBox">
      <SignUp />
      <div>
        Уже есть аккаунт?&nbsp;
        <Link to="/login">Войти</Link>
      </div>
    </div>
  )
}
