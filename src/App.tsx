import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Products from './pages/products/Products'
import { useEffect } from 'react'
import { fetchUser } from './redux/authSlice'
import { useAppDispatch } from './hooks/reduxHook'
import { Route, Routes } from 'react-router-dom'

function App() {
  const appDispatch = useAppDispatch();

  useEffect(() => {
    appDispatch(fetchUser());
  }, [appDispatch]);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/products' element={<Products />} />
    </Routes>
  );
}

export default App
