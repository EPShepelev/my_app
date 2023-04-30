import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
      <h2>Войти</h2>
      <p>
        <Link to="/registration">Зарегистрироваться</Link>
      </p>
    </div>
  )
}
