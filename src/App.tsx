import { Route, Routes } from 'react-router-dom'
import './App.css'

// Layout
import Home from './components/layouts/Home'
import Projects from './components/layouts/Projects'

// Components
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
   <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
   </>
  )
}

export default App