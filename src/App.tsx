import { Routes, Route } from 'react-router-dom'

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-brand">CareSpace</h1>
      <p className="text-brand-dark">Welcome to CareSpace!</p>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
