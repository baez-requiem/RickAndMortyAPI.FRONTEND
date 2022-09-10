import { Route, Routes } from "react-router-dom"
import { HomePage, LoginPage, FavoritesPage } from '../pages'

const AllRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/Favorites" element={<FavoritesPage />} />
  </Routes>
)

export default AllRoutes