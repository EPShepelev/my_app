import PropTypes from 'prop-types'

import styles from './Button.module.scss'

export default function Button({ onClickHandler, text }) {
  return (
    <button
      type="button"
      className={styles.btn}
      onClick={(e) => onClickHandler(e)}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
}
