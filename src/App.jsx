
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
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import AdminDashboard from './pages/AdminDasboard'
import DashboardDestinations from './pages/admin/DashboardDestinations'
import DashboardOverview from './pages/admin/DashboardOverview'
import DashboardUsers from './pages/admin/DashboardUsers'
import DashboardBookings from './pages/admin/DashboardBookings'
import ToursDetail from './pages/ToursDetail'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/tour' element={<Tours />} />
        <Route path="/tours/:id" element={<ToursDetail />} />
        <Route path='/login' element={<LoginRegister />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="/destination/:id" element={<DestinationDetail />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/overview" element={<DashboardOverview />} />
        <Route path="/destinations" element={<DashboardDestinations />} />
        <Route path="/users" element={<DashboardUsers />} />
        <Route path="/bookings" element={<DashboardBookings />} />
      </Routes>
      <Footer />


    </>




  )
}

export default App
