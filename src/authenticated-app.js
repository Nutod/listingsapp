import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Listings from './pages/Listings'
import Listing from './pages/Listing'
import Users from './pages/Users'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

export default function AuthenticatedApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="listings" element={<Listings />} />
      <Route path="listings/:id" element={<Listing />} />
      <Route path="users" element={<Users />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
