import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Listings from './pages/Listings'
import Listing from './pages/Listing'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="listings" element={<Listings />} />
        <Route path="listings/:id" element={<Listing />} />
      </Routes>
    </BrowserRouter>
  )
}
