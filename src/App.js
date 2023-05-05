import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Error from './pages/Error'

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
