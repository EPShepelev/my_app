import { Link } from 'react-router-dom'

export default function Registration() {
  return (
    <div>
      <h2>Регистрация</h2>
      <p>
        Уже есть аккаунт?
        <Link to="/login">Войти</Link>
      </p>
    </div>
  )
}
