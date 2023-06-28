import styles from "./App.module.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login.jsx";

import ErrorPage from "./pages/ErrorPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import Home from "./pages/Home.jsx";
import Navigation from "./components/Navigation.jsx";
import BlogDetailPage from "./pages/BlogDetailPage.jsx";
import ContactForm from "./components/ContactForm.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Galleries from "./pages/Galleries.jsx";
import GalleriesDetailPage from "./pages/GallieriesDetailPage.jsx";
import CodingProjects from "./pages/CodingProjects";
/* import UserContext from '../context/UserContext' */

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <main className={styles.App}>
      {/* <UserContext.Provider value={user}> */}
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/blog' element={<Home />} />
          <Route path='/galleries' element={<Galleries />} />
          <Route
            path='/galleriesdetailpage/:id'
            element={<GalleriesDetailPage />}
          />
          <Route
            path='/adminPage'
            element={
              isLoggedIn ? (
                <AdminPage />
              ) : (
                <Login setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />
          <Route path='/blogdetailpage/:id' element={<BlogDetailPage />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='/login' element={<Login />} />
          <Route path='/codingprojects' element={<CodingProjects />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
      {/* </UserContext.Provider> */}
    </main>
  );
}

export default App;
