import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Connexion from './pages/Connexion'
import Quiz from './pages/Quiz'
import Welcome from './pages/Welcome'
import Error404 from './pages/error404'
import { createGlobalStyle } from 'styled-components'
import Inscription from './pages/Inscription'
const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 1; /* Firefox */
  }

  body {
    font-family: Calibri, Candara, Segoe, “Segoe UI”, Optima, Arial, sans-serif;
    background-color: cadetblue;
    color: white;
  }
`
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
    <GlobalStyle/>
      <Header />
      <Routes>
        <Route path='/' element={<Welcome />}/>
        <Route path='/quiz/:questionNumber' element={<Quiz />}/> 
        <Route path='/connexion' element={<Connexion />}/>
        <Route path='/inscription' element={<Inscription />}/>
        <Route path='*' element={<Error404 />}/>
      </Routes>
      <footer>
        <Footer />
      </footer>
    </Router>
  </React.StrictMode>
)
