import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './component/Header'
import Main from './component/Main_Section'
import Footer from './component/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
)
