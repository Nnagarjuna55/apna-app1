import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'

export default function Dashboard() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState('')

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get('/chapters')
        setData(res.data)
      } catch (e) {
        setErr(e?.response?.data?.message || e.message)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  if (loading) return <div>Loading...</div>
  if (err) return <div className="text-red-600">{err}</div>

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {data.map(ch => (
        <Link to={`/chapter/${ch._id}`} key={ch._id} className="card hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">{ch.title}</h2>
            <span className="badge border-blue-600 text-blue-700">{ch.completed}/{ch.totalProblems} done</span>
          </div>
          <p className="text-gray-600 mt-1">{ch.description}</p>
          <div className="progress mt-4"><div style={{width: `${ch.totalProblems? Math.round((ch.completed/ch.totalProblems)*100) : 0}%`}}></div></div>
        </Link>
      ))}
    </div>
  )
}
