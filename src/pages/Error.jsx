import { useLocation, Link } from 'react-router-dom'

export default function Error() {
  const location = useLocation()

  return (
    <div className="error">
      <span className="caption">Что-то пошло не так...</span>
      <span>{location.state}</span>
      <Link to="/" className="back">
        Назад
      </Link>
    </div>
  )
}
