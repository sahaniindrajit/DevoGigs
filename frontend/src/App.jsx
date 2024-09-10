import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import Job from './Pages/job.jsx'
import Join from './Pages/login.jsx'
import About from './Pages/about.jsx'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/job' element={<Job/>} />
        <Route path='/join' element={<Join/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<div>404 Page not found</div>} />
        
      </Routes>
    </BrowserRouter>

  )
}

export default App

