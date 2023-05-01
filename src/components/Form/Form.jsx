import { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './Form.module.css'

export default function Form({ btnText, handleClick }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitClickHandle = (e) => {
    e.preventDefault()
    handleClick(email, password)
  }

  return (
    <div>
      <form className={styles.form}>
        {/* TODO: переделать на кастомные компоненты, как делал раньше */}
        <input
          className={styles.input}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e-mail"
        />
        <input
          className={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="пароль"
        />
        <button
          className={styles.btn}
          type="submit"
          onClick={(e) => onSubmitClickHandle(e, email, password)}
        >
          {btnText}
        </button>
      </form>
    </div>
  )
}

Form.propTypes = {
  btnText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}
