import { useState } from 'react'
import PropTypes from 'prop-types'

import Input from '../Input/Input'
import Button from '../Button/Button'

import styles from './Form.module.scss'

export default function Form({ btnText, handleClick }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitClickHandle = (e) => {
    e.preventDefault()
    handleClick(email, password)
  }

  return (
    <form className={styles.form}>
      <Input
        type="text"
        value={email}
        setValue={setEmail}
        placeholder="e-mail"
      />
      <Input
        type="password"
        value={password}
        setValue={setPassword}
        placeholder="password"
      />
      <Button text={btnText} onClickHandler={onSubmitClickHandle} />
    </form>
  )
}

Form.propTypes = {
  btnText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}
