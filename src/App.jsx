
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import GetinTouch from './pages/GetinTouch'
import Error from './pages/Error'
import About from './pages/About'

import Footer from './components/Footer'
import Destination from './pages/Destination'
import Gallery from './pages/Gallery'
import Tours from './pages/Tours'
import Blog from './pages/Blog'
import DestinationDetail from './pages/DestinationDetail'
import LoginRegister from './components/LoginRegister'
import Pages from './pages/Pages'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import AdminDashboard from './pages/AdminDasboard'
import DashboardDestinations from './pages/admin/DashboardDestinations'
import DashboardOverview from './pages/admin/DashboardOverview'
import DashboardUsers from './pages/admin/DashboardUsers'
import DashboardBookings from './pages/admin/DashboardBookings'

import Offer from './pages/Offer'
import Team from './pages/Team'
import Faq from './pages/Faq'
import ToursDetail from './pages/ToursDetail'



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/pages' element={<Pages />} />
         <Route path='/about' element={<About />} />
         <Route path='/offer' element={<Offer />} />
         <Route path='/team' element={<Team />} />
         <Route path='/getintouch' element={<GetinTouch />} />
         <Route path='/faq' element={<Faq />} />

         <Route path='/error' element={<Error />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/tour' element={<Tours />} />
        <Route path="/tours/:title" element={<ToursDetail />} />
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
