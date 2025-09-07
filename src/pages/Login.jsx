import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const nav = useNavigate()
  const { login } = useAuth()
  const [mode, setMode] = useState('login') // 'login' | 'register'
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [err, setErr] = useState('')

  async function submit(e) {
    e.preventDefault()
    setErr('')
    try {
      const url = mode === 'login' ? '/auth/login' : '/auth/register'
      const payload = mode === 'login' ? { email: form.email, password: form.password } : form
      const { data } = await api.post(url, payload)
      login(data)
      nav('/')
    } catch (e) {
      setErr(e?.response?.data?.message || e.message)
    }
  }

  return (
    <div className="max-w-md mx-auto card">
      <h1 className="text-2xl font-bold mb-4">{mode === 'login' ? 'Login' : 'Create Account'}</h1>
      {err && <div className="mb-3 text-red-600 text-sm">{err}</div>}
      <form onSubmit={submit} className="space-y-3">
        {mode === 'register' && (
          <div>
            <label className="label">Name</label>
            <input className="input" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
          </div>
        )}
        <div>
          <label className="label">Email</label>
          <input type="email" className="input" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
        </div>
        <div>
          <label className="label">Password</label>
          <input type="password" className="input" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} required minLength={6} />
        </div>
        <button className="btn bg-blue-600 text-white w-full" type="submit">{mode === 'login' ? 'Login' : 'Register'}</button>
      </form>

      <div className="text-sm mt-4">
        {mode === 'login' ? (
          <>No account? <button className="link" onClick={() => setMode('register')}>Create one</button></>
        ) : (
          <>Already have an account? <button className="link" onClick={() => setMode('login')}>Sign in</button></>
        )}
      </div>
    </div>
  )
}
