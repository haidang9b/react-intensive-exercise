import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './redux/store.tsx'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.tsx'

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
