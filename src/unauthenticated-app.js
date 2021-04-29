import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Listings from './pages/Listings'
import Listing from './pages/Listing'
import NotFound from './pages/NotFound'

export default function UnauthenticatedApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="listings" element={<Listings />} />
      <Route path="listings/:id" element={<Listing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
