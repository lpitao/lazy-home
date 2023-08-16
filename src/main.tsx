import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Routes from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Routes>
    <React.StrictMode>
      <App />
      </React.StrictMode>
  </Routes>,
)
