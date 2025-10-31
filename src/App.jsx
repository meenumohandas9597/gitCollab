
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
      <Routes>
<<<<<<< HEAD
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
=======
        <Route path="/" element={<><Header /><Home /><Footer /></>} />
        <Route path="/about" element={<><Header /><About /><Footer /></>} />
        <Route path="/destination" element={<><Header /><Destination /> <Footer /></>} />
        <Route path="/gallery" element={<><Header /><Gallery /><Footer /></>} />
        <Route path="/tour" element={<><Header /><Tours /><Footer /> </>} />
        <Route path="/tours/:id" element={<><Header /> <ToursDetail /> <Footer /> </>} />
        <Route path="/blog" element={<> <Header /> <Blog /> <Footer /> </>} />
        <Route path="/destination/:id" element={<><Header /><DestinationDetail /> <Footer /> </>} />
        <Route path="/shop" element={<> <Header /> <Shop /> <Footer /></>} />
        <Route path="/contact" element={<><Header /> <Contact /> <Footer /> </>} />

        <Route path="/login" element={<LoginRegister />} />

        {/* ---------- ADMIN  ---------- */}
        <Route path="/admin/dashboard" element={<AdminDashboard />}>
          <Route path="overview" element={<DashboardOverview />} />
          <Route path="destinations" element={<DashboardDestinations />} />
          <Route path="users" element={<DashboardUsers />} />
          <Route path="bookings" element={<DashboardBookings />} />
        </Route>
>>>>>>> 47da4fa10951609f0a206ed8d84fbdf6be5d1a2c
      </Routes>



    </>




  )
}

export default App
