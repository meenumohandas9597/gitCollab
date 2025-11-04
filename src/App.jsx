
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Error from './pages/Error'
import About from './pages/About'

import Footer from './components/Footer'
import Destination from './pages/Destination'
import Tours from './pages/Tours'
import Blog from './pages/Blog'
import DestinationDetail from './pages/DestinationDetail'
import LoginRegister from './components/LoginRegister'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import AdminDashboard from './pages/AdminDasboard'
import DashboardDestinations from './pages/admin/DashboardDestinations'
import DashboardOverview from './pages/admin/DashboardOverview'
import DashboardUsers from './pages/admin/DashboardUsers'
import DashboardBookings from './pages/admin/DashboardBookings'

import ToursDetail from './pages/ToursDetail'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'



function App() {
  return (
    <>
   
      <Routes>


        <Route path="/" element={<><Header /><Home /><Footer /></>} />
        <Route path="/about" element={<><Header /><About /><Footer /></>} />
        <Route path="/destination" element={<><Header /><Destination /> <Footer /></>} />
        <Route path="/tour" element={<><Header /><Tours /><Footer /> </>} />
        <Route path="/tours/:id" element={<><Header /> <ToursDetail /> <Footer /> </>} />
        <Route path="/blog" element={<> <Header /> <Blog /> <Footer /> </>} />
        <Route path="/destination/:id" element={<><Header /><DestinationDetail /> <Footer /> </>} />
        <Route path="/shop" element={<> <Header /> <Shop /> <Footer /></>} />

        <Route path="/contact" element={<><Header /> <Contact /> <Footer /> </>} />
        <Route path="/*" element={<Error />} />

      <Route path="/cart" element={<><Header /><Cart /><Footer /></>} />
        <Route path="/product/:id" element={<><Header /><ProductDetail /><Footer /></>} />



        <Route path="/login" element={<LoginRegister />} />

        {/* ---------- ADMIN  ---------- */}
        <Route path="/admin/dashboard" element={<AdminDashboard />}>
          <Route path="overview" element={<DashboardOverview />} />
          <Route path="destinations" element={<DashboardDestinations />} />
          <Route path="users" element={<DashboardUsers />} />
          <Route path="bookings" element={<DashboardBookings />} />
        </Route>



      </Routes>



    </>




  )
}

export default App
