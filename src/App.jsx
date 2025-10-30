
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Destination from './pages/Destination'
import Gallery from './pages/Gallery'
import Tours from './pages/Tours'
import Blog from './pages/Blog'
import DestinationDetail from './pages/DestinationDetail'
import LoginRegister from './components/LoginRegister'
import About from './pages/About'


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/destination' element={<Destination/>} />
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/tour' element={<Tours/>}/>
      <Route path='/login' element={<LoginRegister/>}/>
      <Route path='/blog' element={<Blog/>}/>
       <Route path="/destination/:id" element={<DestinationDetail />} />
    </Routes>
    <Footer/>

    
    </>

    


  )
}

export default App
