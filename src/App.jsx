
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Destination from './pages/Destination'
import Gallery from './pages/Gallery'


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/destination' element={<Destination/>} />
      <Route path='/gallery' element={<Gallery/>} />
    </Routes>
    <Footer/>

    
    </>

    


  )
}

export default App
