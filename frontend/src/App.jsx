import styles from './App.module.scss'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import  Login  from '../components/Login.jsx'


import AdminPage from '../pages/AdminPage.jsx'
import Home from '../pages/Home.jsx'
import Navigation from '../components/Navigation.jsx'
import BlogDetailPage from '../pages/BlogDetailPage.jsx'
import ContactForm from '../components/ContactForm.jsx'
import LandingPage from '../pages/LandingPage.jsx'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <main className={styles.App}>
      <Router>
      <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/blog" element={<Home/>} />
          <Route path="/adminPage" element={isLoggedIn ? <AdminPage/> : <Login setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/blogdetailpage/:id" element={<BlogDetailPage />}/>
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </main>
  )
} 

export default App
