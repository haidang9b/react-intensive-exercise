import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Header } from 'antd/es/layout/layout'
import { Provider } from 'react-redux'
import store from './redux/store.tsx'
import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
