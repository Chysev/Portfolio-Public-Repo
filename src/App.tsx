import { Routes, Route } from 'react-router-dom'

// Components
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App