import './App.css'
import Home from './pages/homePage/HomePage'
import ProductPage from './pages/productPage/ProductPage'
import { useEffect } from 'react'
import { fetchUser } from './redux/authSlice'
import { useAppDispatch } from './hooks/reduxHook'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './pages/productDetail/ProductDetail'
import AboutUs from './pages/aboutUs/AboutUs'
import ContactPage from './pages/contactPage/ContactPage'
import LoginPage from './pages/loginPage/LoginPage'
import RegisterPage from './pages/registerPage/RegisterPage'

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/product/:id" element={<ProductDetail/>} />

    </Routes>
  );
}

export default App
