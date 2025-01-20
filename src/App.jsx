import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Pages/Navbar'
import Home from './components/Pages/Home'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
