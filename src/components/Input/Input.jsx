import PropTypes from 'prop-types'

import styles from './Input.module.scss'

export default function Input({ type, value, setValue, placeholder }) {
  return (
    <input
      className={styles.input}
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  placeholder: '',
}
