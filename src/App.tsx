import { Route, Routes } from 'react-router-dom'
import './App.css'

// Layout
import Home from './components/layouts/Home'
import Projects from './components/layouts/Projects'
import PageNotFound from './components/layouts/PageNotFound'

// Components
import Navbar from './components/Navbar/Navbar'
import Light_To_Dark from './components/Light_To_Dark/Light_To_Dark'
import Footer from './components/Footer/Footer'

function App() {

  return (
   <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Light_To_Dark />
      <Footer />
   </>
  )
}

export default App