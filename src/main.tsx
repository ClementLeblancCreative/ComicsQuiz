import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import App from './pages/App'
import Quiz from './pages/Quiz'
import Welcome from './pages/Welcome'
import Error404 from './pages/error404'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Calibri, Candara, Segoe, “Segoe UI”, Optima, Arial, sans-serif;
    background-color: #3ca3a6;
    color: white;
  }
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
    <GlobalStyle/>
      <Header />
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/quiz' element={<Quiz />}/> 
        <Route path='/welcome' element={<Welcome />}/>
        <Route path='*' element={<Error404 />}/>
      </Routes>
      <footer>
        <Footer />
      </footer>
    </Router>
  </React.StrictMode>
)
