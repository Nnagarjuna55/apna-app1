import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import Chapter from './Chapter'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/AuthContext'

function Protected({ children }) {
  const { token } = useAuth()
  if (!token) return <Navigate to="/login" replace />
  return children
}

export default function App() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Protected><Dashboard /></Protected>} />
        <Route path="/chapter/:id" element={<Protected><Chapter /></Protected>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}
