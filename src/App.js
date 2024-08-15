// Filename - App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavbarComponent";
import Footer from "./components/Footer/FooterComponent";
import Home from "./pages";
import About from "./pages/about";
import AboutComponent from "./components/about/AboutComponent";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import Search from "./pages/search";
import CardComponent from "./components/home/CardComponent";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={ <AboutComponent/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
