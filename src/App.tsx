import { Route, Routes } from 'react-router-dom'
import './App.css'

// Layout
import Home from './components/layouts/Home'
import Projects from './components/layouts/Projects'

// Components
import Navbar from './components/Navbar/Navbar'
import Light_To_Dark from './components/Light_To_Dark/Light_To_Dark'

function App() {

  return (
   <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Light_To_Dark />
   </>
  )
}

export default App