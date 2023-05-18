import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
// TODO удалить импорт если nanoid не понадобиться
// import { nanoid } from 'nanoid'
import { addDoc } from 'firebase/firestore'

// import AuthContext from '../context'
import useAuth from '../hooks/useAuth'
import { removeUser } from '../store/slices/user'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'

import { postsRef } from '../firebase'

export default function Home() {
  // const { isAuth, setIsAuth } = useContext(AuthContext)
  const dispatch = useDispatch()
  const { email, isAuth, id } = useAuth()

  const logoutHandler = () => {
    dispatch(removeUser())
    // setIsAuth(false)
    // localStorage.removeItem('auth')
  }

  const [postTitle, setPostTitle] = useState('')
  const [postText, setPostText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    addDoc(postsRef, {
      uid: id,
      title: postTitle,
      text: postText,
    })

    setPostTitle('')
    setPostText('')
  }

  return isAuth ? (
    <div>
      <h1>Welcome to home page</h1>
      <p>user: {email}</p>
      <Button onClickHandler={logoutHandler} text="выход" />
      <Input
        type="text"
        value={postTitle}
        setValue={setPostTitle}
        placeholder="Заголовок поста"
      />
      <Input
        type="text"
        value={postText}
        setValue={setPostText}
        placeholder="Текст"
      />
      <button onClick={handleSubmit} type="submit">
        Создать!
      </button>
    </div>
  ) : (
    <Navigate to="/login" />
  )
}
