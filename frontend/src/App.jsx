import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'

import Join from './Pages/login.jsx'
import About from './Pages/about.jsx'
import Contact from './Pages/contact.jsx'
import Event from './Pages/event.jsx'
import Jobs from './Pages/job.jsx'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/job' element={<Jobs/>} />
        <Route path='/event' element={<Event/>} />
        <Route path='/join' element={<Join/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<div>404 Page not found</div>} />

      </Routes>
    </BrowserRouter>

  )
}

export default App

