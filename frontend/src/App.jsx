import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import AdminPage from '../pages/AdminPage.jsx'
import Home from '../pages/Home.jsx'
import Navigation from '../components/Navigation.jsx'
import BlogDetailPage from '../pages/BlogDetailPage.jsx'
import ContactForm from '../components/ContactForm.jsx'


function App() {


  return (
    <main className="App">
      <Router>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/blogdetailpage/:id" element={<BlogDetailPage />}/>
          <Route path="/contact" element={<ContactForm />} />
        </Routes>

      </Router>
      


    </main>
  )
} 

export default App
