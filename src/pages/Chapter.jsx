import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../services/api'

function DiffBadge({ d }) {
  const colors = {
    Easy: 'border-green-600 text-green-700',
    Medium: 'border-yellow-600 text-yellow-700',
    Hard: 'border-red-600 text-red-700'
  }
  return <span className={`badge ${colors[d] || ''}`}>{d}</span>
}

export default function Chapter() {
  const { id } = useParams()
  const [problems, setProblems] = useState([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState('')

  async function load() {
    try {
      const res = await api.get(`/problems/chapter/${id}`)
      setProblems(res.data)
    } catch (e) {
      setErr(e?.response?.data?.message || e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [id])

  async function toggle(pId, completed) {
    try {
      await api.patch('/progress', { problemId: pId, completed })
      setProblems(prev => prev.map(p => p._id === pId ? { ...p, completed } : p))
    } catch (e) {
      alert(e?.response?.data?.message || e.message)
    }
  }

  if (loading) return <div>Loading...</div>
  if (err) return <div className="text-red-600">{err}</div>

  return (
    <div className="space-y-3">
      {problems.map(p => (
        <div key={p._id} className="card">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <input type="checkbox" checked={!!p.completed} onChange={e => toggle(p._id, e.target.checked)} />
              <h3 className="text-lg font-semibold">{p.order}. {p.title}</h3>
            </div>
            <DiffBadge d={p.difficulty} />
          </div>
          <div className="flex flex-wrap gap-3 mt-3 text-sm">
            {p.videoUrl && <a className="link" href={p.videoUrl} target="_blank" rel="noreferrer">YouTube</a>}
            {p.practiceUrl && <a className="link" href={p.practiceUrl} target="_blank" rel="noreferrer">LeetCode/CF</a>}
            {p.articleUrl && <a className="link" href={p.articleUrl} target="_blank" rel="noreferrer">Article</a>}
            {p.tags?.map(t => <span key={t} className="badge border-gray-400 text-gray-700">#{t}</span>)}
          </div>
        </div>
      ))}
    </div>
  )
}
