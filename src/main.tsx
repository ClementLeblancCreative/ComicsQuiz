import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import App from './pages/App'
import Quiz from './pages/Quiz'
import Welcome from './pages/Welcome'
import Error404 from './pages/error404'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/quiz' element={<Quiz />}/> 
        <Route path='/welcome' element={<Welcome />}/>
        <Route path='*' element={<Error404 />}/>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
